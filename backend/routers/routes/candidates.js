const express = require('express');

const { getConfirmedCandidates } = require('./../../controllers/candidates');

const confirmedCandidatesRouter = express.Router();

confirmedCandidatesRouter.get("/confirmedCandidates", getConfirmedCandidates);

module.exports = confirmedCandidatesRouter;