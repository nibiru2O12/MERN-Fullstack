import React from 'react';
import {bool} from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    return (
       <div className='Modals'>
            <Backdrop show/>
            <div>
                Hello World
            </div>
       </div> 
    );
};

Modal.propTypes = {
    show : bool
};

export default Modal;


