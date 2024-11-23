<<<<<<< HEAD
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        img: { type: String, required: true },
        categories: { type: Array, required: true},
        type: { type: String, required: true},
        price: { type: Number, required: true },
        inStock: { type: Boolean, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
=======
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        img: { type: String, required: true },
        categories: { type: Array, required: true},
        type: { type: String, required: true},
        price: { type: Number, required: true },
        inStock: { type: Boolean, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
>>>>>>> a2ab1112518d39227690f560726fa6511a2eee7d
