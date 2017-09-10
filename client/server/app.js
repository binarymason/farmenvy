'use strict';

// Ensure environment variables are read.
require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../config/webpack.config.dev');
const paths = require('../config/paths');
const compiler = webpack(webpackConfig);

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    clientLogLevel: 'none',
    noInfo: true,
    stats: {colors: true},
    compress: true,
    contentBase: paths.appPublic,
    // By default files in ContentBase will not trigger a reload.
    watchContentBase: true,
    overlay: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  // Setup logger for production
  app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

  // Serve static assets
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
}

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
