const matchedRequestsModel = require ("./../../../backend/db/models/requests");
const usertsModel = require ("./../../../backend/db/models/user");




app.get("/matchedRequests", (req,res)=>{

    // const matchedRequests = (req,res,) =>{

    

    const id = req.paramse.id
    usertsModel.find1({_id:id})

    .then((result)=>{
        matchedRequestsModel.find({bloodType:result.bloodType})
    
        .then((result1)=>{
          res.status(200);
          res.json(result1);
      })
        .catch((err)=>{
          res.send(err)
      })
    })
    })
      .catch((err)=>{
        res.send(err)
    })
   

module.exports ={matchedRequests}