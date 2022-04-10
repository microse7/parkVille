const mongoose = require('mongoose');

//creating a schema for register form.
const registerSchema = mongoose.Schema({
    //describing the fields that were used to input data as in our pug file.
    name:{
        type:String,
        required:true
        //Data is of type string and is required.
    },
    email:{
        type:String,
        required:true
    },
    uname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

//We are exposing our schema to other files
const Register = module.exports = mongoose.model('Register', registerSchema);