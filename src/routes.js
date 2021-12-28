const express = require('express');
const routes = express.Router();
const user = require('./controllers/user.controller')

routes.get('/', (req, res)=>{
    res.json({message: 'hello bitches'})
});

routes.post('/api/register', user.register)

module.exports = routes;