const express = require('express');

const { getConfirmedCandidates } = require("../controllers/candidates");

const confirmedCandidatesRouter = express.Router();

confirmedCandidatesRouter.get("/request/:id/confirmedCandidates", getConfirmedCandidates);

module.exports = confirmedCandidatesRouter;