import React from 'react';
import {bool} from 'prop-types';

const Backdrop = (props) => {

    const backdrop = props.show ? <div className='Backdrop' /> : null ; 

    return (
        backdrop
    );
};

Backdrop.propTypes = {
    show : bool
};

export default Backdrop;


