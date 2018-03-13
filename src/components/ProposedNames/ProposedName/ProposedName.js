import React from 'react';
import {object,func} from 'prop-types';

const ProposedName = (props) => {

    const {name} = props;

    return (
        <li className="list-group-item proposed-name-container">
            {name.name} <button className='close' onClick={()=>props.onDelete()}>x</button>
        </li>
    );

};

ProposedName.propTypes = {
    name : object,
    onDelete : func
};

export default ProposedName;