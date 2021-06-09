import React from 'react'
import "./myrequest.css"

const MyOneRequest = ({hospital,date,bloodType}) => {

    







    return (
        <div id = "MyOneReq">
            <h3 id = "blood">{bloodType}</h3>
            <h3 id = "hosp">{hospital}</h3>
            <h3 id = "mydate">{date}</h3>
            <button id="candidates">candidates</button>
            <button id="update">update</button>
            <button id="delete">delete</button>
            
        </div>
    )
}

export default MyOneRequest

