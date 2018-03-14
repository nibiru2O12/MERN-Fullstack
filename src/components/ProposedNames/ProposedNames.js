import React,{Component} from 'react';
import {array} from 'prop-types';

import ProposedName from './ProposedName/ProposedName';

class ProposedNames extends Component {

    static propTypes = {
        names : array
    };

    render() {

        const {names} = this.props;

        const nameLists = names && names.map(name => {
            return (<ProposedName name={name} key={name.id} onDelete={()=>this.handleDelete(name.id)} />);
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


export default (ProposedNames);