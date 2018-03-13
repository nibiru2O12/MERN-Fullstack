import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';

import rootReducer from '../store/reducers/rootReducer';
import * as actions from '../store/actions/actionCreator';
import App from './components/App';

const store = createStore(rootReducer,applyMiddleware(thunk));

store.dispatch(actions.addName('hello world'));
console.log(store.getState());
const rootDoc  = document.getElementById('root');

ReactDom.render(
    <Provider store={store}>
        <App intialData={window.initialData} />
    </Provider>
    ,rootDoc);

