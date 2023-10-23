var express = require('express');
var path = require('path');

//Express
var app = express();

//Routes
//var indexRouter = require('./routes/index');
//var productListRouter = require('./routes/product_list_router');

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

var indexRouter = require('./routes/index');
var productListRouter = require('./routes/product_list_router');

app.set('port', process.env.PORT || '3000')
app.listen(app.get('port'));
console.log('Server running on port 5000');

//instances routers
app.use('/', indexRouter);
app.use('/productslist', productListRouter);

module.exports = app;