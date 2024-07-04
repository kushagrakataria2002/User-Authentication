const express = require('express'); 
const body_parser = require('body-parser'); 
const path = require('path'); 
const dotenv = require('dotenv').config({path: './src/.env'}); 
const user_router = require('../routes/user.js'); 
const cookie_parser = require('cookie-parser'); 
require('./connecting_db.js'); 

//creating server 

const app = express(); 

app.use(body_parser.urlencoded({extended:true})); 
app.use(express.json()); 

app.listen(process.env.PORT,(req,res) =>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
}); 

// using middleware for custom CSS,js and images 

app.use(express.static(path.join(__dirname,"../public"))); 

//using cookoie parser
app.use(cookie_parser()); 

// using router 

app.use('/api/v1/user',user_router); 

