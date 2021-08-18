import React from 'react';
import "./MatchedRequests.css";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


function OneReq({fullName , hospital , phone ,date, location , bloodType, reqId, getMatched} ) {

    const confirmRequest = () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        axios.post("http://localhost:5000/candidates/getconfirmed", {reqId : reqId , userId : userId})
        .then((result)=>{
        console.log(result)
        getMatched();
    }).catch((err)=>{
        throw err;
    })

    }
    return (
        
            
        <div id="OneReq">
             <p id="fullname" ><strong>Name : </strong>{fullName}</p>
             <p id="bloodtype" ><strong>BloodType : </strong>{bloodType}</p>
             <p id="hospital" ><strong>Hospital : </strong>{hospital}</p>
             <p id="phone" ><strong>Phone : </strong>{phone}</p>
             <p id="location" ><strong>Location : </strong>{location}</p>
             <p id="date" ><strong>Date : </strong>{date.slice(0,10)}</p>
            <ClearIcon id="dec"/>
            <CheckIcon id="conf" onClick= {confirmRequest} />
            


        </div>
    )
}

export default OneReq
