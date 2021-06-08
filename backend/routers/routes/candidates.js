const express = require("express");
const { getConfirmedCandidates, getRequestCandidates } = require("./../controllers/candidates");

const CandidatesRouter = express.Router()

CandidatesRouter.get("/getconfirmed" , getConfirmedCandidates )
CandidatesRouter.get("/getrequestcandidates" , getRequestCandidates )


module.exports= CandidatesRouter