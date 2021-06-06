const express = require("express");
const { getConfirmedCandidates } = require("./../controllers/candidates");

const CandidatesRouter = express.Router()

CandidatesRouter.get("/getconfirmed" , getConfirmedCandidates )


module.exports= CandidatesRouter