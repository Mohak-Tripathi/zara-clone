const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const womenSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    id: { type:Number, required: true },
    price: { type: Number, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Women = mongoose.model("women", womenSchema);
module.exports = Women;