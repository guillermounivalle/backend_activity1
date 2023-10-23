//Implement endpoints

const express = require('express');
const bodyParser = require('body-parser');

//database
const mongoose = require('mongoose');
const product_list = require('../models/product_list');

const productListRouter = express.Router();

productListRouter.use(bodyParser.json());

productListRouter.route('/')

//app.get
.get( (req,res, next) =>{
    product_list.find({})
    //mongoose population
    .then((product_list) => {
        res.statusCode = 200
        setHeader = ('Content-Type', 'application/json');
        res.json(product_list);
        console.log('========= ', + product_list[2]);
    }, (err) => next(err))
    .catch((err) =>  next(err));
})

module.exports = productListRouter;