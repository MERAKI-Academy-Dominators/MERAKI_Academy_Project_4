const hospitalsModel = require("./../../../db/models/hospitals");

const getAllHospitals = (req, res) => {
    hospitalsModel
    .find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.send(err);
    });
};

module.exports = {
    getAllHospitals,
};