const mongoose = require('mongoose');

let produts = new mongoose.Schema({
    subcategory: String,
    title : String,
    price : Number,
    popularity: String
});

module.exports = mongoose.model('products',produts);
