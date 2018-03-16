import React from 'react';
import {connect} from 'react-redux';
import {object,func} from 'prop-types';

import * as actions from '../../../store/actions/actionCreator';

const ProposedName = (props) => {

    const {name} = props;

    return (
        <li className="list-group-item proposed-name-container">
            {name.name} <button className='close' onClick={()=>props.deleteName(name.contestId,name.id)}>x</button>
        </li>
    );

};

ProposedName.propTypes = {
    name : object,
    onDelete : func,
    deleteName : func
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteName  : (contestID,nameID) => dispatch(actions.deleteName(contestID,nameID))
    };
};

export default connect(null,mapDispatchToProps)(ProposedName);