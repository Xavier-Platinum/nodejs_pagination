const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
})

module.exports = {Product: mongoose.model("Product", productSchema)};