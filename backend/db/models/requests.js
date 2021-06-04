const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const requests = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    date: {type: Date, required: true, default: Date.now},
    bloodType: {type: String, required: true},
    hospital: {type: mongoose.Schema.Types.ObjectId, ref: "Hospital"},
    requestStatus: {type: Boolean},
});

module.exports = mongoose.model("Request", requests);