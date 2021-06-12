import React from "react";
import { TextField, Button} from "@material-ui/core";
import "./EditProfile.css";
const Header = () => {
  let userId = JSON.parse(localStorage.getItem("user"));
  console.log(userId);
  let obj = {
    fullName: "",
    phoneNumber: "",
    bloodType: "",
    address: "",
    _id: `${userId._id}`,
  };
  const handleSubmit = () => {
    return localStorage.setItem("user", JSON.stringify(obj));
  };
  return (
    <div className="form">
      <br />
      <TextField
        variant="filled"
        label="FullName"
        defaultValue={userId.fullName}
        onChange={(e) => (obj.fullName = e.target.value)}
      />
      <br />
      <br />
      <TextField
        variant="filled"
        label="Blood Type"
        defaultValue={userId.bloodType}
        onChange={(e) => (obj.bloodType = e.target.value)}
      />
      <br />
      <br />
      <TextField
        variant="filled"
        label="Phone Number"
        defaultValue={userId.phoneNumber}
        onChange={(e) => (obj.phoneNumber = e.target.value)}
      />
      <br />
      <br />
      <TextField
        variant="filled"
        label="Address"
        defaultValue={userId.address}
        onChange={(e) => (obj.address = e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Save
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Header;
