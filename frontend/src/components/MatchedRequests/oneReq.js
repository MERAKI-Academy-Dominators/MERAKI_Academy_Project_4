import React from 'react';
import "./MatchedRequests.css";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


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
            <h2 id="fullname">{fullName}</h2>
            <h2 id="bloodtype">{bloodType}</h2>
            <h3 id="hospital">{hospital}</h3>
            <h3 id="phone">{phone}</h3>
            <h3 id="location">{location}</h3>
            <h3 id="date">{date}</h3>
            <button id="dec">decline</button>
            <button id="conf" onClick= {confirmRequest} >confirm</button>
            


        </div>
    )
}

export default OneReq
