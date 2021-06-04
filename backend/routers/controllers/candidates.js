const Requests = require("../../db/models/requests");
const candidates = require("../../db/models/candidate");

const getConfirmedCandidates = (req, res) => {
    const reqID = req.params.id;
    const request = Requests.find({_id: reqID});
    const bloodTypeSection = request.populate("bloodType");

    candidates
    .find({bloodType: bloodTypeSection.bloodType})
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