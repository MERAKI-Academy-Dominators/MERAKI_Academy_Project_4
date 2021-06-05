const express = require("express");
const Request = require("./../../db/models/requests")
const Hospital = require("./../../db/models/hospitals")
const User = require("./../../db/models/user")




const getUserRequests = ( async  (req, res) => {
    const userId = req.body.userId;
    try{
    const arrOfRequests = await Request.find({userId});
    res.status(200).json(arrOfRequests);
    } catch (err) {
        throw err;
    }
})







const getMatchedRequests = (req,res) =>{
  let cond
  const bloodType = req.body.bloodType

  if(bloodType == "O-"){
    cond = { $or: [ { bloodType:  "A+"  }, { bloodType:  "AB+"} , { bloodType:  "A-"  }, { bloodType:  "AB-"} , { bloodType:  "B+"  }, { bloodType:  "B-"} , { bloodType:  "O-"  }, { bloodType:  "O+"}] }
  }else if (bloodType == "O+"){
    cond = { $or: [ { bloodType:  "A+"  }, { bloodType:  "AB+"} , { bloodType:  "B+"  }, { bloodType:  "O+"} ] }
  }else if (bloodType == "A+"){
    cond = { $or: [ { bloodType:  "A+"  }, { bloodType:  "AB+"} ] }
  }else if (bloodType == "A-"){
    cond = { $or: [ { bloodType:  "A+"  }, { bloodType:  "AB+"} , { bloodType:  "A-"  }, { bloodType:  "AB-"} ] }
  }else if (bloodType == "B+"){
    cond = { $or: [ { bloodType:  "B+"  }, { bloodType:  "AB+"} ] }
  }else if (bloodType == "B-"){
    cond = { $or: [ { bloodType:  "B+"  }, { bloodType:  "AB+"} , { bloodType:  "B-"  }, { bloodType:  "AB-"} ] }
  }else if (bloodType == "AB+"){
    cond = { $or: [ { bloodType:  "AB+"  }] }
  }else if (bloodType == "AB-"){
    cond = { $or: [ { bloodType:  "AB-"  }, { bloodType:  "AB+"} ] }
  }


   
    Request.find(cond).populate("userId", "fullName -_id").populate("hospitalId", "-_id")
    .then((result)=>{res.json(result)}).catch((err)=>{res.send(err)})


}









const createRequest = async (req , res ,next)=> {
    
  let requestStatus = true
  //const candidates = []
  
 const { userId , bloodType , hospital} = req.body ;


  /*const objId = await User.find({ $or: [ { bloodType:  "A+"  }, { bloodType:  "AB+"}  ] }, "_id").then((result)=>{return(result)}).catch((err)=>{res.send(err)})
  console.log(objId)

  objId.forEach( (elem,i)=>{
    candidates.push(elem._id)
  })*/

 const hospitalId = await Hospital.findOne({name:hospital})
 .then((result)=>{return(result._id)})
 .catch((err)=>{res.send(err)})
 
  
 const request = new Request ({ userId , bloodType , hospitalId ,requestStatus})
  
 request.save().then((result)=>{next()}).catch((err)=>{res.send(err)})

}








  
module.exports = {createRequest , getMatchedRequests, getUserRequests }