import React from 'react';
import ReactDom from 'react-dom';

import Provider from './store/config';
import App from './components/App';

const rootDoc  = document.getElementById('root');

ReactDom.hydrate(
    <Provider >
        <App intialData={window.initialData} />
    </Provider>
    ,rootDoc);

