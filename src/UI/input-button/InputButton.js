import React from 'react';
import {string,func} from 'prop-types';

const InputButton = (props) => {
    return( 
        <div className="input-group">
            <input type="text" 
                    className="form-control" 
                    placeholder={props.placeholder}
                    value = {props.value}
                    onChange = {(e)=>props.onChange(e)}/>
            <div className="input-group-btn">
                <button className="btn btn-success" type={props.btnType}>
                    {props.btnText}
                </button>
            </div>
        </div>
    );
};

InputButton.propTypes = {
    placeholder : string,
    btnType : string,
    btnText : string,
    value : string,
    onChange : func
};

InputButton.defaultProps = {
    btnType : 'submit',
    btnText : 'Submit'
};

export default InputButton;