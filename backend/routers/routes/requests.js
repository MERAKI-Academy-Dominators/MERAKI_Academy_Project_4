const express = require("express");
const {createRequest , getMatchedRequests, getUserRequests } = require("./../controllers/requests")


const requestRouter = express.Router()

requestRouter.post("/create" , createRequest )
requestRouter.get("/matched" , getMatchedRequests )
requestRouter.get("/myRequests" , getUserRequests )



module.exports= requestRouter