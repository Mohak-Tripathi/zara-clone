const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    id: { type:Number, required: true },
    price: { type: Number, required: true },
     userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
      }
    

  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;