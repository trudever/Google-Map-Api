const express = require('./express');
const routes = require('./routes');
const server = express(routes);

server.listen(8000);

module.exports = server;
