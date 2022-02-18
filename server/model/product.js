// Product Model
import mongoose from "mongoose";

// Setup Schema
let productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    }
});

// Export model
let Product = module.exports = mongoose.model('product', productSchema);
module.exports.get = (callback, limit) => {
    Product.find(callback).limit(limit);
};