const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const menSchema = new mongoose.Schema(
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


const Men = mongoose.model("men", menSchema);
module.exports = Men;