import express from'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist')) // this is telling use dist folder for react flle

server.get('/',(req,res)=>{
    const intialMarkup = ReactDomServer.renderToString(<App/>);
    res.send(`
     <html>
      <head>
      <title> Sample React App</title>
      </head>
      <body>
      <div id = "mountNode">${intialMarkup}</div>
      <script src="/main.js"></script> // webpack create main.js file
      </body>
     </html>
    `)
}) 

server.listen(4242, ()=> console.log('Server is running'))