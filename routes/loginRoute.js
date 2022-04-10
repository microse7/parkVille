const express = require('express');
const router = express.Router();

const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());

//Accessing the login page
router.get('/login',(req,res)=>{
     res.render('login')
});

// Login process
router.post('/login', function(req, res, next){
    passport.authenticate('local', { 
      successRedirect: '/parking',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  });

module.exports = router