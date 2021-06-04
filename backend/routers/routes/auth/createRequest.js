const express = require('express');

const { createRequest } = require('./../../controllers/auth/createRequest');

const requestRouter = express.Router();

requestRouter.post("/createRequest", createRequest);

module.exports = requestRouter;
