//Implement endpoints

const express = require('express');
const bodyParser = require('body-parser');

//Controller
const {getProducts, addProduct} = require('../controllers/product_list');

const productListRouter = express.Router();

productListRouter.use(bodyParser.json());



//app.get
productListRouter.get('/', getProducts);
productListRouter.post('/create', addProduct)

module.exports = productListRouter;

