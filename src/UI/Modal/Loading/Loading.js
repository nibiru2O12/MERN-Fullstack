import React from 'react';
import Backdrop from '../../Backdrop/Backdrop';

const Loading = (props) =>{
    return(
        <div >
            <div className='Loading'>
                <Backdrop show={props.show} />
            </div>
        </div>            
    );
};

export default Loading;