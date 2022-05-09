const express=require("express")
// const res = require("express/lib/response")


const router=express.Router()

//namechange

const Product=require("../models/product.model")


router.get("/",async (req,res)=>{

    const newproduct= await Product.find({}).lean().exec()
    return res.status(200).send({newproduct})


})
module.exports=router