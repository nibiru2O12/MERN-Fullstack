import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import PropTypes from 'prop-types';

import rootReducer from '../store/reducers/rootReducer';

const CustomProvider = props => {
    return(
        <Provider store={props.Store}>
            {props.children}
        </Provider>
    );
}

CustomProvider.propTypes = {
    Store :  PropTypes.object
}

CustomProvider.defaultProps = {
    Store : createStore(rootReducer,applyMiddleware(thunk))
}

export default  CustomProvider