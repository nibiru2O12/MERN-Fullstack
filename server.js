import express from 'express';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';


import router from './api';
import config from './config';
import serverRender from './serverRender';

const server = express();

server.use(sassMiddleWare({
    src:path.join(__dirname,'sass'),
    dest:path.join(__dirname,'public')
}));

server.set('view engine','ejs');

server.get(['/','/contest/:id','contest/:id/names'], (req, res) => {
    serverRender(req.params.id)
        .then(({initialData,initialMarkup}) => {
            res.render('index',{
                initialMarkup : initialMarkup,
                initialData : initialData
            });
        })
        .catch(console.error);

  });

server.use('/api',router);

//this will server static pages
//needed also when rendering jsx
server.use(express.static('public'));

server.listen(config.PORT,config.host,(err)=>{
    if(err) console.info(err);
    console.info(`Listening on port ${config.PORT}`);
});