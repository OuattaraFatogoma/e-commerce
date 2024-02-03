const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    Price: {
        type: Number,
        required: [true, "Please enter a price"],
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
    },
    categorie: {
        type: String,
        required: [true, "Please enter a categorie"],
    },
    image: {
        type: String,
        required: [true, "Please enter a image url"],
    },
    rating: {
        rate: Number,
        count: Number,
        default: {
            rate: 4,
            count: 1,
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Products', ProductsSchema);