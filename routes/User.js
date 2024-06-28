const express = require("express");
const SignUp = require("./../models/Person");
const router = express.Router();

router.get("/", async (req,res)=>{
    const data = await SignUp.find()
    res.status(200).json({data})
});

router.post("/", async (req,res)=>{
    try {
      const data = req.body;
      const person = new SignUp(data);
      const response = await person.save();
      console.log(response)
      res.status(200).json({status:"data saved"})
    } catch (error) {
      console.log(error);
      res.status(401).json({error:"server Internal Error"})
    }
  })

  router.get("/:name",async (req,res)=>{
    try {
      const {name} = req.params;
      const queryData = await SignUp.find({name:name});
      res.status(200).json({queryData})
    } catch (error) {
      console.log(error);
      res.status(404).json({error:"Invalid calls"})
    }
  
  })

  router.put("/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const updatableData = req.body;
        const response = await SignUp.findByIdAndUpdate(id,updatableData,{
            new:true,
            runValidators:true
        })
        if(!response) res.send("data not found");

        res.status(201).json({response});
    } catch (error) {
        console.log(error);
      res.status(404).json({error:"Server Internal error"})
    }
  })

  router.delete("/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const response = await SignUp.findByIdAndDelete(id)
        if(!response) res.status(500).json({message:"User not find"});
        res.status(200).send("user Deleted")
    } catch (error) {
        res.status(404).json({message:"server down try some time"})
    }
  } )
  module.exports = router;