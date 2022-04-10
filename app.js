//Importing our packages into the controller.
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//Qualifying config to be a package.
const config = require('./config/database');

//Register model
const Register = require('./models/registerModel');

mongoose.connect(config.database);
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});
 
const app = express();

//Setting up the view engine
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setting up a directory for static files.
app.use(express.static(path.join(__dirname, 'public')));

// Express Session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// Passport Middleware
app.use(passport.initialize());
//Records the time one was in session.
app.use(passport.session());

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
   //Once comparison is done, next() method releases the code to continue executing.
   next();
});

// Route Files
let land_route = require('./routes/landRoute');
let login_route = require('./routes/loginRoute');
let reg_route = require('./routes/regRoute');
//let park_route = require('./routes/parkRoute');

app.use('/', land_route);
app.use('/login', login_route);
app.use('/register', reg_route);
//app.use('/parking', park_route);

app.listen(3000, function(){
  console.log(`Server started on port 3000`);
})