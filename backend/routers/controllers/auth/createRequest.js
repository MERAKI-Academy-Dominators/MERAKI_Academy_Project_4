const reqModel = require("./../../../db/models/requests");

const createRequest = (req, res) => {
  const { userId, date, bloodType, hospital, requestStatus } = req.body;

  const request = new reqModel({
    userId,
    date,
    bloodType,
    hospital,
    requestStatus,
  });

  request
    .save()
    .then((result) => {
      res.status(201);
      res.json("Request created");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createRequest,
};
