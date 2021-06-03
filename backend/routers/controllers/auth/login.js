const express = require("express");
const User = require ("./../../../db/models/user");
const bcrypt = require("bcrypt");

const login = async (req , res , next) =>{

    let loginEmail = req.body.email
    const loinPassword = req.body.password
    loginEmail=loginEmail.toLowerCase()
    const authEmail = await User.findOne ({ email : loginEmail }).then((result)=>{return result })
    if (authEmail){
        const comparePass = await bcrypt.compare(loginPassword,authEmail.password)
        if(comparePass){
            res.json({email : true , password : true}).status(200)

        }else{
            res.status(403);
            res.json({email : true , password : false})

        } } else{
            res.status(404);
            res.json({email : false , password : true})

        }
}
module.exports = {login}

