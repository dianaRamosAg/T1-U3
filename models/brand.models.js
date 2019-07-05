const mongoose = require('mongoose');

let brandSchema = new mongoose.Schema(
    {
        brand:{
            require:true,
            type:String
        }
    }
);
const brandModel = mongoose.model('Brand', brandSchema, 'brand');
module.exports = brandModel;