const express=require("express")
// const res = require("express/lib/response")


const router=express.Router()

//namechange

const Men=require("../models/men.model")


router.get("/",async (req,res)=>{

    const mendata= await Men.find({}).lean().exec()
    return res.status(200).send(mendata)


})

router.get("/:id",async (req,res)=>{

    const mendata= await Men.findOne({req.params.id}).lean().exec()
    return res.status(200).send(mendata)


})
module.exports=router
