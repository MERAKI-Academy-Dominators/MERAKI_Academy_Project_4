const matchedRequestsModel = require("./../../../backend/db/models/requests");
const usertsModel = require("./../../../backend/db/models/user");



const matchedRequests = (req, res) => {
  const id = req.params.id;
  usertsModel
    .find({ _id: id })
    .then((result) => {
      matchedRequestsModel
        .find({ bloodType: result.bloodType })
        .then((result) => {
          res.status(200);
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { matchedRequests };
