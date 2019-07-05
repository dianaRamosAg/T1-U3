const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true  
    },
    min: {
        type: Number,
        required: true  
    },
    max: {
        type: Number,
        required: true  
    }
});

const productModel = mongoose.model('Producto', productSchema, 'productos');

module.exports = productModel;