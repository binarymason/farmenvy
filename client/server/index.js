'use strict';

const chalk = require('chalk')

const app = require('./app');
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';
const ENV = process.env.NODE_ENV;

app.listen(PORT, (err) => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green(`starting in ${ENV} mode`))
    console.log(chalk.blue(`listening at http://${HOST}:${PORT}`));
  }
});
