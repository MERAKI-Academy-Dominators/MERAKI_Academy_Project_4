const myRequestsModel = require ("./../../../db/models/requests");

// app.get("/MyRequests", (req,res)=>{
  const MyRequests = (req, res) => {
const id = req.params.id
myRequestsModel.find({_id:id})

  .then((result)=>{
      res.status(200);
      res.json(result);
  })
  .catch((err)=>{
      res.send(err)
  })
}


module.exports = {MyRequests}