import React, {useState} from 'react';
import { Route, Link, useParams, useHistory} from 'react-router-dom';
import NewRequest from './../../components/NewRequest/index';
import Button from '@material-ui/core/Button';
import MatchedRequests from './../../components/MatchedRequests/index';
import EditProfile from './../../components/EditProfile/index';
import MyRequests from './../../components/MyRequests/index';
import ConfirmedCandidates from './../MyRequests/ConfirmedCandidates';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import './Profile.css'
import ToolBar from '@material-ui/core/ToolBar'
import MenuIcon from '@material-ui/core/Menu'
import { ButtonGroup } from '@material-ui/core';
import "./../MyRequests/MyRequest.css"


const Profile = () => {
	const[hospitals,setHospitals]=useState();

	const getHospitals = ()=>{
		axios.get("http://localhost:5000/hospitals").then((result)=>{setHospitals(result.data)})
	   };




	   return (
	
		<div id = "profile">

	
		<div id = "profileNavigation">
		
	   <Link to = '/Profile/edit'><button  className = "profileButton">Edit Profile</button></Link>
	
	
	  <Link to = '/Profile/newRequest'><button className = "profileButton" onClick ={getHospitals} >New Request</button></Link>
	
		
	  <Link to = '/Profile/myRequests'><button className = "profileButton">My Requests</button></Link>
	
	
	  <Link to = '/Profile/matchedRequests'><button className = "profileButton">Matched Requests</button></Link>	
	
	 </div>

	<div id = "userInformation">
	<img id="profileImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
	<h2 id ="userName">{JSON.parse(localStorage.getItem('user')).fullName}<hr id="namehr"></hr></h2>
	<h2 id ="userblood">{JSON.parse(localStorage.getItem('user')).bloodType}</h2>
	
	</div>

    <div id = "mainSpace">
	<Route path= "/Profile/edit" render={()=> <EditProfile/>}/> {/*not implemented yet*/}

	<div id = "newrequest"><Route path= "/Profile/newRequest" render={()=> <NewRequest hospitals = {hospitals}/>}/> {/*React (Button :- createRequest + List of options :- getAllHospitals + List of options :- BloodTypes)*/}
	</div>



	<div id="myrequest1" ><Route path= "/Profile/myRequests" render={()=> <MyRequests/>}/> {/*getUserRequests* + React (Button :- deleteUserRequests + Button :- updateUserRequests*/}</div>


	 <div  ><Route path= "/Profile/myRequests/:id" render={()=> <ConfirmedCandidates/>}/>  {/*getRequestCandidates*/}</div>
	 <div id="matchedrequest" ><Route path= "/Profile/matchedRequests" render={()=> <MatchedRequests/>}/> {/*getMatchedRequests + React(Button :- getConfirmedCandidates + Button :- React - hide the request)*/}</div>
	</div>


	</div>


)};

export default Profile;
