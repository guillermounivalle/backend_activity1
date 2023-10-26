//Product list collection using mongoose schemas

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productListSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    product_name: {
        type: String,
        require: true
    }, 
    description: {
        type: String,
        require: false
    },
    price: {
        type: Number,
        require: true,
        min: 0
    }
},{
    timestamps: true
},{collection: 'product_list'});

var ProductList = mongoose.model('product_list', productListSchema);

module.exports = ProductList;