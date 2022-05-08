const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
  
    price: { type: Number, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Products = mongoose.model("product", productSchema);
module.exports = Products;