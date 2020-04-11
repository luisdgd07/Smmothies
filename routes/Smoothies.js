const express=require('express');
const router= express.Router();
const Smoothie =require('../models/Smoothies');
router.post('/nuevo',async(req,res)=>{
    const body=req.body;
    try{
        const Smoothie1=await Smoothie.create(body);
        res.status(200).json(Smoothie1);
    }catch(error){
        return res.status(404).json({
            mensaje:'Ocurrio un error',
            error:error
        });
    }
});
router.get('/Smoothie',async(req,res)=>{

    try{
        const Smoothie1=await Smoothie.find();
        res.status(200).json(Smoothie1);
    }catch(error){
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error:error
        });
    }
});


module.exports=router;