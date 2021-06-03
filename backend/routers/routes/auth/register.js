const express = require('express');

const { createNewUser } = require('./../../controllers/auth/register');

const registerRouter = express.Router();

registerRouter.post("/register", createNewUser);

module.exports = registerRouter;
