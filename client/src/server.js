const path = require('path');
const express = require('express');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const manifest = require('../dist/ssr-manifest');

const server = express();

const appPath = path.join(__dirname, '../dist', manifest['app.js']);
const App = require(appPath).default;

server.use('/img', express.static(path.join(__dirname, '../dist', "img")));
server.use('/js', express.static(path.join(__dirname, '../dist', "js")));
server.use('/css', express.static(path.join(__dirname, '../dist', "css")));
server.use('/favicon.ico', express.static(path.join(__dirname, '../dist', "favicon.ico")));

server.get('*', async (req, res) => {
  const app = createSSRApp(App);
  const appContent = await renderToString(app);

  const html = `
  <!DOCTYPE html>
  <html lang="">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="icon" href="/favicon.ico">
        <title>client</title>
        <link rel="stylesheet" href="${manifest['app.css']}"/>
        <link href="/css/app.fb0c6e1c.css" rel="stylesheet">
      </head>

      <body>
      <div id="app">
      ${appContent}
      </div>
      </body>
  </html>
    `;
  res.end(html);
});

server.listen(3000, console.log("Server active on port: 3000"));