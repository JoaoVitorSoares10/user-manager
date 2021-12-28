const express = require('express');
const routes = express.Router();
const user = require('./controllers/user.controller')

routes.get('/', user.home);

routes.post('/api/register', user.register);

module.exports = routes;