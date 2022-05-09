const Cart= require("../models/cart.model");
const express = require("express");
const authenticate=require("../middlerwares/authmiddleware")

const router = express.Router();


router.post("",authenticate, async (req, res) => {
  try {
      req.body.userId=req.user
      console.log(req.user)

    const cart= await Cart.create(req.body);

    return res.status(200).send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("",authenticate, async (req, res) => {
  try {
    req.body.userId = req.user;
    const cart = await Cart.find({userId:req.body.userId}).lean().exec();
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// delete---->

router.delete("/:id",authenticate, async (req, res) => {
  try {
    req.body.userId = req.user;
    console.log(req.user);
    const cart = await Cart.findByIdAndDelete({_id:req.params.id});
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
});


module.exports = router;