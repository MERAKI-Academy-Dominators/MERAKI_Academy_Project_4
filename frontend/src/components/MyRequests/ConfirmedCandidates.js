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
    <Grid spacing= '3' justify='center' container>
		<Grid item>
      <div className="ConCandidates">
        <div id="candidate">
          <h2 id="fullName"> {fullName}</h2>
          <h2 id="bloodType"> {bloodType}</h2>
          <h3 id="phoneNumber"> {phoneNumber}</h3>
        </div>
      </div>
	  </Grid>
    </Grid>
  );
};

export default ConfirmedCandidates;
