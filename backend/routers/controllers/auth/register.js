const usersModel = require("./../../../db/models/user");

const createNewUser = (req, res) => {
  const { fullName, email, age, address, bloodType, location, image, phoneNumber} = req.body;

  const user = new usersModel({
    fullName,
    email,
    password,
    age,
    address,
    bloodType,
    location,
    image,
    phoneNumber,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
	createNewUser,
};
