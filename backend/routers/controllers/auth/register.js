const usersModel = require("./../../../db/models/user");

const createNewUser = (req, res) => {
  const { fullName, image, email, password, age, address, phoneNumber, bloodType, location } = req.body;

  const user = new usersModel({
    fullName,
    image,
    email,
    password,
    age,
    address,
    phoneNumber,
    bloodType,
    location,
  });

  user
    .save()
    .then((result) => {
      res.status(201)
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
	createNewUser,
};
