import React, { useState } from "react";
import { Route, Link, useParams, useHistory } from "react-router-dom";
import NewRequest from "./../../components/NewRequest/index";
import Button from "@material-ui/core/Button";
import MatchedRequests from "./../../components/MatchedRequests/index";
import EditProfile from "./../../components/EditProfile/index.js";
import MyRequests from "./../../components/MyRequests/index";
import ConfirmedCandidates from "./../MyRequests/ConfirmedCandidates";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./Profile.css";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/core/Menu";
import { ButtonGroup } from "@material-ui/core";
import "./../MyRequests/MyRequest.css";
import Avatar from "@material-ui/core/Avatar";

const Profile = () => {
  const [hospitals, setHospitals] = useState();

  const getHospitals = () => {
    axios.get("http://localhost:5000/hospitals").then((result) => {
      setHospitals(result.data);
    });
  };

  return (
    <div id="profile">
      <div id="profileNavigation">
        <Link style={{ textDecoration: "none" }} to="/Profile/edit">
          <Button variant="contained" className="profileButton">
            Edit Profile
          </Button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/Profile/newRequest">
          <Button
            variant="contained"
            className="profileButton"
            onClick={getHospitals}
          >
            New Request
          </Button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/Profile/myRequests">
          <Button variant="contained" className="profileButton">
            My Requests
          </Button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/Profile/matchedRequests">
          <Button variant="contained" className="profileButton">
            Matched Requests
          </Button>
        </Link>
      </div>

      <div id="userInformation">
        <Avatar
          id="profileImage"
          src={JSON.parse(localStorage.getItem("user")).image}
        />
        <h2 id="userName">
          {JSON.parse(localStorage.getItem("user")).fullName}
          <hr id="namehr"></hr>
        </h2>
        <h2 id="userblood">
          {JSON.parse(localStorage.getItem("user")).bloodType}
        </h2>
      </div>

      <div id="mainSpace">
       
        <div id="newrequest">
          <Route
            path="/Profile/newRequest"
            render={() => <NewRequest hospitals={hospitals} />}
          />{" "}
          {/*React (Button :- createRequest + List of options :- getAllHospitals + List of options :- BloodTypes)*/}
        </div>
 <div id="Profile-edit">
          <Route path="/Profile/edit" render={() => <EditProfile />} />{" "}
          {/*not implemented yet*/}
        </div>
        <div id="myrequest1">
          <Route path="/Profile/myRequests" render={() => <MyRequests />} />{" "}
          {/*getUserRequests* + React (Button :- deleteUserRequests + Button :- updateUserRequests*/}
        </div>

        <div>
          <Route
            path="/Profile/myRequests/:id"
            render={() => <ConfirmedCandidates />}
          />{" "}
          {/*getRequestCandidates*/}
        </div>
        <div id="matchedrequest">
          <Route
            path="/Profile/matchedRequests"
            render={() => <MatchedRequests />}
          />{" "}
          {/*getMatchedRequests + React(Button :- getConfirmedCandidates + Button :- React - hide the request)*/}
        </div>
      </div>
    </div>
  );
};

export default Profile;
