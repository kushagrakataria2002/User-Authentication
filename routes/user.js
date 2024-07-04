const express = require('express'); 
const { register_user, login_user, get_profile, logout_user } = require('../controllers/user');
const is_login = require('../src/utilities/autharization');

const user_router = express.Router(); 

user_router.post('/register',register_user); 

user_router.post('/login', login_user); 

user_router.get('/me', is_login, get_profile); 

user_router.post('/logout',is_login, logout_user); 

module.exports = user_router; 