
import React,{Component} from 'react';
import {func} from 'prop-types';

import InputButton from '../../../UI/input-button/InputButton';

class ProposeName extends Component {

    state = {
        name : ''
    }

    static propTypes = {
        onSubmit : func.isRequired
    }

    handleOnChange = (e) => {
        e.preventDefault();
        const {value} = e.target;
        this.setState({name:value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.name);
        
        //reset to empty
        this.setState({name:''});    
    }

    render() {
        return (
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    Propose a Name 
                </div>
                <div className='panel-body'>
                    <form onSubmit={(e)=> this.handleSubmit(e)}>
                        <InputButton 
                                value={this.state.name} 
                                placeholder='enter a name'
                                onChange = {this.handleOnChange} />
                    </form>
                </div>
            </div>
        );
    }
}


export default ProposeName;