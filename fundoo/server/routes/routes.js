const express = require('express');
const route= express.Router();
var users=require('../controllers/user.controller');
var Middleware=require('../middleware/authentication');
route.post('/Login',users.login);
route.post('/Register',users.register);

route.post('/forgetpassword', users.finduser);
route.post('/reset/:token', Middleware.checkToken, users.setPassword);

module.exports=route; 