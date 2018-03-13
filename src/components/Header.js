import React from 'react';
import {string} from 'prop-types';

const Header = ({header}) =>{
    return (
        <h2 className="text-center">
            {header}
        </h2>
    );
};

Header.propTypes = {
    header : string.isRequired
};

export default Header;