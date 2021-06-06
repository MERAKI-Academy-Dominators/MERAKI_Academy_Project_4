const express = require("express");
const Candidate = require("./../../db/models/candidates")
const Request = require("./../../db/models/requests")



const getConfirmedCandidates = async (req, res) => {
    const {reqId, userId}  = req.body;

    const filter = {reqId};
    await Candidate.findOne(filter)
    .then((result)=>{
        const users = result.users;
        const user = users.filter((element)=>{
            if(element.userId == userId){
                return element
            }
        })
        user[0].confirmedStatus = true;
        Candidate.findOneAndUpdate(filter, {users : [...users]}, {new:true}).then((result)=>{
            res.json(result)
        })
    })
        .catch((err)=>{
            res.send(err)
        })
    
}
 


module.exports = { getConfirmedCandidates }