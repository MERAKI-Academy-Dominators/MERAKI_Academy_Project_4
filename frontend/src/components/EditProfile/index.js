import React, { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import './EditProfile.css'

import "./EditProfile.css";

const EditProfile = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [render, setRender] = useState(false);
  const [user_image, setUser_image] = useState("");

  //functions
  const setUserInformation = () => {
    let updatedUser = {
      address,
      email,
      fullName,
      bloodType,
      phoneNumber,
      _id: JSON.parse(localStorage.getItem("user"))._id,
    };
    let updatedImage = {
      userImage: user_image,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    localStorage.setItem("user_image", JSON.stringify(updatedImage));
    setRender(true);
  };

  //useEffect
  useEffect(() => {
    return render ? history.push("/profile") : "";
  }, [render]);



  return (
    <div className="profile-information">
      {JSON.parse(localStorage.getItem("user")) ? (
        <div className="your-information">
          <p
            className="login_text"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Edit Your Info...
          </p>{" "}
          
          <TextField
            className="editForm1"
            placeholder={`${
              JSON.parse(localStorage.getItem("user")).email
            }`}
            type="email"
            label = 'Email'
            // aria-label="Large"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
          <br />
          <TextField
            className="editForm1"
            placeholder={` ${
              JSON.parse(localStorage.getItem("user")).fullName
            }`}
            type="text"
            label = 'Full Name'
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <br />
          <TextField
            className="editForm1"
            placeholder={` ${
              JSON.parse(localStorage.getItem("user")).phoneNumber
            }`}
            type="text"
            label = 'Phone Number '
            aria-label="Large"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <br />
          <TextField
            className="editForm1"
            label = 'Address '
            placeholder={` ${
              JSON.parse(localStorage.getItem("user")).address
            }`}
            type="text"
            aria-label="Large"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <TextField
            className="editForm1"
            label = 'Profile Pic Link'
            placeholder={` ${
              JSON.parse(localStorage.getItem("user_image")).userImage
            }`}
            type="text"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => {
              setUser_image(e.target.value);
            }}
          />
          <br />
          <Select
            className="editForm"
            as="select"
            placeholder={`bloodType : ${
              JSON.parse(localStorage.getItem("user")).bloodType
            }`}
            onChange={(e) => {
              setBloodType(e.target.value);
            }}
          >
            <MenuItem
          
            >
              Choose Blood Type
            </MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
          <br />
          <br />
          <div >
            <Button className="singUpButton1" onClick={setUserInformation}>
              Update Your Info
            </Button>{" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditProfile;
