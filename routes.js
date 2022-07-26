const express = require('express');
const route = express.Router();

const loginController = require('./src/controllers/loginController');
const userController = require('./src/controllers/userController');



// Rotas de Login
route.get('/', loginController.index);

// Rotas de usuario
route.get('/user/index', userController.index);
route.post('/user/register', userController.register);





module.exports = route;