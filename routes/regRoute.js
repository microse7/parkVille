const express = require('express');
const router = express.Router();

const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());

//Requiring the schema of registration page
const userRegister = require('../models/registerModel'); 

//Accessing the registration page
router.get('/register',(req,res)=>{
    res.render('register')
});

router.post('/register',(req,res)=>{
    //declaration of variables that correspond to the names in the form.
    const name = req.body.name;
    const email = req.body.email;
    const uname = req.body.uname;
    const password = req.body.password;
    const password2 = req.body.password2;
        
    //Error handling.
    const errors = req.validationErrors();
    if(errors){
        //incase of an error display the form
        res.render('register')
    }
    else{
        //New variable
        let newRegister = new Register({
            //value(property name from schema):property(variable name targeting the required field)
            name:name,
            email:email,
            uname:uname,
            password:password,
        });
        //Saving our model
      
bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newRegister.password, salt, function(err, hash){
      if(err){
        console.error(err);
      }
      newRegister.password = hash;

      newRegister.save(function(err){
        if(err) {
          console.error(err);
          return;
        } else {
          req.flash('success', 'You are now registered and can log in');
          res.redirect('/login');
        }
      });
    });
  })
}
});

module.exports = router