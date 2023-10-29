//Model
const ProductList = require('../models/product_list');

async function getProducts (req, res){
    await ProductList.find().then(response => {
        res.status(200).send({response});
    }).catch(err => {
        res.status(500).send({response: err});
    })
    
}

async function addProduct (req, res){
    await ProductList.create(req.body)
    .then(response => {
        res.status(200).send(response);
    }).catch(err => {
        res.status(500).send({response: err});
    })
    
}


module.exports = {
    getProducts,
    addProduct
}