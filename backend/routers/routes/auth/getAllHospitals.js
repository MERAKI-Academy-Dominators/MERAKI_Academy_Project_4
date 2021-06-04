const express = require('express');

const { getAllHospitals } = require('./../../controllers/auth/getAllHospitals');

const hospitalsRouter = express.Router();

hospitalsRouter.get("/hospitals", getAllHospitals);

module.exports = hospitalsRouter;