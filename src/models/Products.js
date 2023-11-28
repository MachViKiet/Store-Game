const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title: {type: String, require: true},
        release_date: {type: String, require: true},
        categories: {type: String, require: true},
        sub_categories: {type: String, require: true},
        price: {type: Number, require: true},
        img_url: {type: String, require:true},
        description: {type: String, require: true},
        rating: {type: Number, require: true},
        reviews_count: {type: Number, require: true}
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;