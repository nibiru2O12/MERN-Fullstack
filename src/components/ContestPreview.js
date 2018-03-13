import React from 'react';
import {object,func} from 'prop-types';

const ContestPreview = (props) =>{

    const {contest} = props;
    return(
       <div className="panel panel-default" onClick={()=>props.onClick(contest.id)}>
            <div className="panel-heading">
                {contest.categoryName}
            </div>
            <div className="panel-body">
                {contest.contestName}
            </div>
       </div>
    );

};

ContestPreview.propTypes = {
    contest : object.isRequired,
    onClick : func.isRequired
};

export default ContestPreview;