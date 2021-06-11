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


const Profile = () => {
	const[hospitals,setHospitals]=useState();

	const getHospitals = ()=>{
		axios.get("http://localhost:5000/hospitals").then((result)=>{setHospitals(result.data)})
	   };

	return (
	
		<>

	
		<ButtonGroup>
	<Grid item>	
	<Link to = '/Profile/edit'><Button variant="contained" color= "secondary">Edit Profile</Button></Link>
	</Grid>
	<Grid item>	
	<Link to = '/Profile/newRequest'><Button onClick ={getHospitals} variant="contained" color= "primary">New Request</Button></Link>
	</Grid>
	<Grid item>	
	<Link to = '/Profile/myRequests'><Button variant="contained" color= "secondary">My Requests</Button></Link>
	</Grid>
	<Grid item>	
	<Link to = '/Profile/matchedRequests'><Button variant="contained" color= "primary">Matched Requests</Button></Link>	
	</Grid>
	</ButtonGroup>


	<Route path= "/Profile/edit" render={()=> <EditProfile/>}/> {/*not implemented yet*/}
	<Route path= "/Profile/newRequest" render={()=> <NewRequest hospitals = {hospitals}/>}/> {/*React (Button :- createRequest + List of options :- getAllHospitals + List of options :- BloodTypes)*/}
	<Route path= "/Profile/myRequests" render={()=> <MyRequests/>}/> {/*getUserRequests* + React (Button :- deleteUserRequests + Button :- updateUserRequests*/}
	<Route path= "/Profile/myRequests/:id" render={()=> <ConfirmedCandidates/>}/>  {/*getRequestCandidates*/}
	<Route path= "/Profile/matchedRequests" render={()=> <MatchedRequests/>}/> {/*getMatchedRequests + React(Button :- getConfirmedCandidates + Button :- React - hide the request)*/}
	
	</>

)};

export default Profile;
