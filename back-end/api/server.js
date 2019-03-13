const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const users = require('./users.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const passportSetup = require('./config/passport-setup');
const auth = require('./auth.js');
const keys = require('./config/keys');
const server = express();

server.use(express.json(), cors(), helmet());
server.use('/users', users);
server.use('/workorders', workOrders);
server.use('/properties', properties);
server.use('/auth', auth);

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
