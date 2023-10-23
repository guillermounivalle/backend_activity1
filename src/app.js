var express = require('express');
var path = require('path');
var morgan = require('morgan');

//Express
var app = express();


//Config module
const config = require('./config');

//Mongoose
const mongoose = require('mongoose');
const exp = require('constants');

//Connection with mongodb
const url = config.mongoUrl;
const connect = mongoose.connect(url, {useUnifiedTopology: true,  useNewUrlParser: true});

connect.then((db) => {
    console.log('Connected Correctly to server');
}, (err) => {
    console.log(err);
})


app.set('port', process.env.PORT || '3000')
app.listen(app.get('port'));
console.log(`Server running on port ${app.get('port')}`);

//app.use(morgan('dev'));
//app.use(express.json);

//Routes
//var indexRouter = require('./routes/index');
var productListRouter = require('./routes/product_list_router');
//instances routers
//app.use('/', indexRouter);
app.use('/productslist', productListRouter);

//static
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;