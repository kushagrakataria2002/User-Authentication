const mongoose = require('mongoose'); 

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true, 
        unique:true
    },
    email:{
        type:String, 
        required:true, 
        unique:true
    }, 
    password:{
        type:String, 
        required:true, 
        unique:true
    }
}); 

const user_details = mongoose.model("user_details", schema); 

module.exports = user_details; 


