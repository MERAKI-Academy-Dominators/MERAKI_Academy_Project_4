const users = require("../../db/models/user");
const request = require("../../db/models/requests");
const candidates = require("../../db/models/candidate");

const getConfirmedCandidates = (req, res) => {
    const {reqId, userId} = req.body;
    const request = candidates.find({reqId: reqId});

    candidates
    .find({bloodType: user.populate("bloodType")})
    .then((result) => {
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    })
}

module.exports = {getConfirmedCandidates};