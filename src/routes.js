const express = require('express');
const routes = express.Router();
const user = require('./controllers/user.controller')

routes.get('/api/users', user.home);
routes.get('/api/user/:_id', user.details);
routes.delete('/api/user/delete/:_id', user.delete);
routes.post('/api/user/register', user.register);
routes.put('/api/user/update', user.update);

module.exports = routes;