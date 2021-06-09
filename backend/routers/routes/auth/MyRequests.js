const express = require('express');

const { MyRequests } = require('./../../controllers/auth/MyRequests');

const MyRequestsRouter = express.Router();

MyRequestsRouter.get("/MyRequests", MyRequests);

module.exports = MyRequestsRouter;
