var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');


var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario');
const productRouter = require('./routes/product');



const db = require("./database/models");

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: "Nuestro mensaje secreto",  
  resave: false,                     
  saveUninitialized: true,           
  cookie: { 
    httpOnly: true,                  
    secure: false,                   
    maxAge: 1000 * 60 * 60 * 24 * 30 
  }
}));

app.use(async function(req, res, next) {
  if (req.cookies.userEmail && !req.session.userLogged) {  
    try {
      let user = await db.Usuario.findOne({ where: { email: req.cookies.userEmail } });
      if (user) {
        req.session.userLogged = user;  
      }
    } catch (error) {
      console.log("Error recuperando usuario desde cookie:", error);
    }
  }
  next();
});


app.use(function(req, res, next) {
  res.locals.userLogged = req.session.userLogged;
  next();
});


app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/product', productRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
