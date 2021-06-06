const Requests = require("../../db/models/requests");
const Candidates = require("../../db/models/candidate");

const getConfirmedCandidates = (req, res) => {
  const requestID = req.params.id;
  const request = Requests.find({ _id: requestID });
  const bloodTypeSection = request.populate("bloodType");

  Candidates
    .find({userId: { bloodType: bloodTypeSection.bloodType }})
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((error) => {
      res.status(404);
      res.json(error);
    });
};

module.exports = { getConfirmedCandidates };