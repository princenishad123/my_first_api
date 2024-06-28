const express = require("express");
const Mobile = require("./../models/Mobile");
const mobileRouter = express.Router();

mobileRouter.post("/", async (req,res)=>{
    try {
        const data = req.body;
        if(!data) res.send("data has Required");

        const postData = new Mobile(data);
        const response = await postData.save();
        res.status(200).json(response)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

mobileRouter.get("/", async (req,res)=>{
   const data = await Mobile.find();
   res.status(200).json(data)
})

mobileRouter.get("/:id", async (req,res)=>{
    const {id} = req.params;
   const data = await Mobile.findById(id);
   if(!data) res.status(500).json({message:"data not exits"})
   res.status(200).json(data)
})

mobileRouter.put("/:id",async(req,res)=>{
    const {id} = req.params;
    const updatableData = req.body;
    const update = await Mobile.findByIdAndUpdate(id,updatableData);
    if(!update) res.status(500).send("data is not founded");
    res.status(201).send("data has updated");

});

mobileRouter.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    const del = await Mobile.findByIdAndDelete(id);

    if(!del) res.status(500).send("data is not founded");
    res.status(201).send("data has been deleted");


})



module.exports = mobileRouter;