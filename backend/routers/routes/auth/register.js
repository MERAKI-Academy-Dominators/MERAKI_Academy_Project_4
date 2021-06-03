const express = require('express');

const { createNewUser } = require('./../../controllers/auth/register');

const registerRouter = express.Router();

registerRouter.post('/', createNewUser);

module.exports = registerRouter;