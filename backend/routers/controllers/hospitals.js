const express = require("express");
const Hospital = require("./../../db/models/hospitals")


const addHospital = (req,res)=>{
    const {name , phoneNumber , location } = req.body ;
  
  const hospital = new Hospital ({name , phoneNumber , location })
  
  hospital.save().then((result)=>{res.status(201).json(result)}).catch((err)=>{res.send(err)})
}


const getAllHospitals = async (req,res)=>{
    try{
    const hospitals = await Hospital.find({})
    res.json(hospitals)
    }catch(err){
        throw err
    }
         
}










module.exports = {getAllHospitals , addHospital}
    