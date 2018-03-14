import React from 'react';
import ReactDomServer from 'react-dom/server';
import axios from 'axios';

import Provider from './src/store/config';
import config from './config';
import App from './src/components/App';

const getApiURL = (contestID) => {
    if(contestID){
        return `${config.serverUrl}/api/contest/${contestID}` ;
    }
    return `${config.serverUrl}/api/contests` ;
};

const serverRender = (contestID) =>
        axios.get(getApiURL(contestID))
        .then(resp => {
            return ({
                    initialMarkup : ReactDomServer.renderToString(
                        <Provider>
                            <App intialData={resp.data} />
                        </Provider>
                    ),
                    initialData : resp.data
                });
        });

export default serverRender;