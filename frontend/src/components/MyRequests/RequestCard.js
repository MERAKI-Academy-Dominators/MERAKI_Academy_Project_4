import React, { useState } from "react";
import "./MyRequest.css";
import axios from "axios";
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';



const RequestCard = ({
  hospital,
  date,
  bloodType,
  reqId,
  setHideCandidates,
  setConCandidates,
}) => {
  const deleteRequest = () => {
    axios
      .delete("http://localhost:5000/request/delete", {
        data: { reqId: reqId },
      })
      .then((result) => {
        console.log(reqId);
      })
      .catch((err) => {
        throw err;
      });
  };

  const getConCandidates = () => {
    axios
      .post("http://localhost:5000/candidates/getrequestcandidates", {
        reqId: reqId,
      })
      .then((result) => {
        console.log(result.data);
        setConCandidates(result.data);
        setHideCandidates(false);
        //console.log(conCandidates);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    
     
       <div id = "RequestCard5">
          <p id="blood5" ><strong>BloodType : </strong>{bloodType}</p>
          <p id="hosp5" ><strong>Hospital : </strong>{hospital}</p>
          <p id="mydate5" ><strong>Date : </strong>{date.slice(0,10)}</p>
          
          <LocalHospitalIcon
            onClick={() => {
              getConCandidates();
            }}
            id="candidates"
          />
          
          <DeleteForeverIcon   onClick={deleteRequest} id="delete"/>
         
          </div>
      
  );
};

export default RequestCard;
