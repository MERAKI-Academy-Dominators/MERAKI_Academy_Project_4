import React, { useState } from "react";
import "./ConfirmedCandidates.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ConfirmedCandidates = ({
  fullName,
  bloodType,
  phoneNumber,
  setConCandidates,
  setHideCandidates,
}) => {
  return (
   <div id="MyRequset3">
      <div className="ConCandidates">
        <div id="candidate">
          <p id="fullName1" ><strong>Name : </strong>{fullName}</p>
          <p id="bloodType1" ><strong>BloodType : </strong>{bloodType}</p>
          <p id="phoneNumber1" ><strong>PhoneNumber : </strong>{phoneNumber}</p>
        </div>
      </div>
      </div>
  );
};

export default ConfirmedCandidates;
