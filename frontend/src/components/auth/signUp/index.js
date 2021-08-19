import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { RegisterContext } from "./../../../contexts/register";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";

import "./signUp.css";
const Register = () => {
  const registerContext = useContext(RegisterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerContext.addNewUser();
  };

  return (
    <>
      <div className="form">
        <h1 className = 'h1'>SignUp to Donate blood and save lives </h1>
        <form onSubmit={handleSubmit}>
          <TextField
            className="inputs"
            type="text"
            label="FullName"
            onChange={(e) => registerContext.setFullName(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <TextField
            className="inputs"
            type="email"
            label="Email"
            onChange={(e) => registerContext.setEmail(e.target.value)}
          />
          <br />
          <TextField
            className="inputs"
            type="password"
            label="Password"
            onChange={(e) => registerContext.setPassword(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <TextField
            className="inputs"
            type="number"
            label="Age"
            onChange={(e) => registerContext.setAge(e.target.value)}
          />
          <br />
          <TextField
            className="inputs"
            type="text"
            label="Address"
            onChange={(e) => registerContext.setAddress(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <TextField
            className="inputs"
            type="text"
            label="Phone Number"
            onChange={(e) => registerContext.setPhoneNumber(e.target.value)}
          />
          <br />
          <TextField
            className="inputs"
            type="text"
            label="Location"
            onChange={(e) => registerContext.setLocation(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <TextField
          select
            className="inputs"
            type="text"
            label="Blood Type"
            onChange={(e) => registerContext.setBloodType(e.target.value)}
          >
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </TextField>
          <br />
          <br />
          <br />
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            SignUp
          </Button>
          <p className="agreement">
          Have an account?{" "}
          <a className="sign" href="http://localhost:3000/Login">
            {" "}
            SignIn
          </a>
        </p>
          {registerContext.toLogIn ? <Redirect to="/Login"></Redirect> : null}
        </form>

        {registerContext.userSucc ? (
          <div id="usercreated">
            <h4 id="h3reg">The user has been created successfully</h4>
          </div>
        ) : (
          ""
        )}
        {registerContext.userFail ? (
          <div id="userfail">
            <h4 className="wrong">
              Error happened while register, please try again
            </h4>
          </div>
        ) : (
          ""
        )}
        <p className="agreement">
          By signing up, you agree to our Terms ,<br /> Data Policy and Cookies
          Policy .
        </p>
        <br />
 
        <br />
        <br />
 
        <br />
      </div>
    </>
  );
};

export default Register;
