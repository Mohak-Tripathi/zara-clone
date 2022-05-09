const express=require("express")
// const res = require("express/lib/response")


const router=express.Router()

//namechange

const product=require("../models/product.model")


router.get("/products",async (req,res)=>{

    const newproduct= await product.find({}).lean().exec()
    return res.status(200).send({newproduct})


})
module.exports=router