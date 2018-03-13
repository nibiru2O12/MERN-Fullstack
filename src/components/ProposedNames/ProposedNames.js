import React,{Component} from 'react';
import axios from 'axios';
import {array} from 'prop-types';

import ProposedName from './ProposedName/ProposedName';

class ProposedNames extends Component {

    static propTypes = {
        names : array
    };

    state = {
        contestID : 0,
        names : []
    }

    handleDelete = (nameID) =>{
        axios.delete(`/api/name/${nameID}`)
                .then(
                    this.fetchNames(this.props.contestID)
                        .catch(err => console.log(err))
                        .then(({names})=> this.setState({names}))
                )
                .catch(err => console.log(err));
    }

    fetchNames = (contestID) => 
        axios.get(`/api/contest/${contestID}/names`)
        .then(({data}) => {
            return data;
        });

    componentDidMount(){
        this.fetchNames(this.props.contestID)
                        .catch(err => console.log(err))
                        .then(({names})=> this.setState({names,contestID:this.props.contestID}));
    }

    render() {

        console.log(this.state);
        const {names} = this.state;

        const nameLists = names.map(name => {
            return (
                <ProposedName name={name} key={name.id} onDelete={()=>this.handleDelete(name.id)} />
            );
        });
    
        return (
            <div className='panel panel-default'>
                <div className="panel-heading">
                    Proposed Names
                </div>
                <div className='panel-body'>
                    <ul className='list-group'>
                        {nameLists}
                    </ul>
                </div>
            
            </div>
        );
    
    }
}

export default ProposedNames;