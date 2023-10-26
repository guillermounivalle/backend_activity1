const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const {DB_HOST, DB_NAME, PORT, API_NAME, API_VERSION} = require('./config');

//Express
const app = express();


//Config module
const config = require('./config');

//Mongoose
const mongoose = require('mongoose');


//Connection with mongodb
const mongourl = `mongodb://${DB_HOST}${DB_NAME}`

//SET PORT LISTENING
app.set('port', process.env.PORT || PORT)

//init app connections
async function start (){
    try{
        const connect = mongoose.connect(mongourl, {useUnifiedTopology: true,  useNewUrlParser: true});
            connect.then((db) => {
            console.log('Connected Correctly to server MongoDB');
            }, (err) => {
                console.log(err);
        });
        //add port
        app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));

    }catch(err){
        console.log('Error ===> ', err);
        process.exit(1);
    };
};

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//URL BASE
const baseUrl = `/${API_NAME}/${API_VERSION}`

//Routes
const indexRouter = require('./routes/index');
const productListRouter = require('./routes/product_list_router');

//instances routers
app.use(baseUrl, indexRouter);
app.use(baseUrl+'/productslist', productListRouter);

start();

module.exports = app;