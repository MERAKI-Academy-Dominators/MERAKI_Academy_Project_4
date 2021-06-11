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
          <h2 id="fullName1"> {fullName}</h2>
          <h2 id="bloodType1"> {bloodType}</h2>
          <h3 id="phoneNumber1"> {phoneNumber}</h3>
        </div>
      </div>
      </div>
  );
};

export default ConfirmedCandidates;
