const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const candidates = new mongoose.schema({
    reqId: {type: mongoose.Schema.Types.ObjectId, ref: "Request"},
    users: [{userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}}, {confirmedStatus: {type: Boolean}}]
});

module.exports = mongoose.model("Candidate", candidates);