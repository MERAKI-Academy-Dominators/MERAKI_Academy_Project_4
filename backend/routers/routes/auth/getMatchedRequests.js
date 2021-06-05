const express = require('express');

const { matchedRequests } = require('./../../controllers/auth/getMatchedRequests');

const matchedRequestsRouter = express.Router();

matchedRequestsRouter.get("/matchedRequests", matchedRequests);

module.exports = matchedRequestsRouter;
