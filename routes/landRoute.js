const express = require('express');
const router = express.Router();

const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());

//Accessing the landing page
router.get('/',(req,res)=>{
    res.render('landingPage')
});


//we are exposing our route to any file that will require it
module.exports = router