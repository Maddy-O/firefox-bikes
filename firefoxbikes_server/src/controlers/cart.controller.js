const express = require("express");

const router = express.Router();

const Cart = require("../models/cart.model");

// ----------------------------------USER CRUD----------------------------------------//

router.get("", async (req,res)=>{
     try {
         let item= await Cart.find().lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
})


router.get("/:id", async (req, res)=>{
     try {
         let item= await Cart.findById(req.params.id).lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
});

router.post("",async (req, res) => {
  try {

    let item = await Cart.create(req.body);

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});


router.patch("/:id", async (req,res)=>{
     try {
         let item= await Cart.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
});

router.delete("/:id", async (req,res)=>{
     try {
         let item= await Cart.findByIdAndDelete(req.params.id).lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
});

module.exports = router;