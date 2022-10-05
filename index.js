'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase } = require('./src/auth/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Connection Successful');
  })
  .catch(err => console.error(err));

start();