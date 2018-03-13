import React,{Component} from 'react';
import {array,func} from 'prop-types';

import ContestPreview from './ContestPreview';

class ContestList extends Component {

    render(){
        const {contests} = this.props;
        const contestLists = contests && contests.map(c => {
            return (<ContestPreview 
                            contest={c} 
                            key={c.id } 
                            onClick={this.props.onSelect} />);
        });
    
        return(
            <div>
                {contestLists}
            </div>
        );
    }

}

ContestList.propTypes = {
    contests : array,
    onSelect : func
};

export default ContestList;