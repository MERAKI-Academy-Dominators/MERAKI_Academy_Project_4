import React, {useState} from 'react';
import { Route, Link, useParams, useHistory, Switch} from 'react-router-dom';
import './App.css';
import 'fontsource-roboto';
import Navigation from './components/navigation/index.js'
import Header from './components/Header/index.js';
import Body from './components/Body/index.js';
import Footer from './components/Footer/index.js';
import Register from './components/auth/signUp/index.js';
import Login from './components/auth/login/index.js';
import ReasonsInfo from './components/ReasonsInfo/index.js';
import GivingInfo from './components/GivingInfo/index.js';
import DonationProcess from './components/DonationProcess/index.js';
import Profile from './components/Profile/index.js';
import About from './components/About/index.js';



function App() {

	const [login , setLogin] = useState()
	return <div className="App">
		
		<Header/>
		<Navigation setLogin={setLogin} login={login}  />
		<Switch>
		<Route exact path= "/" render={()=> <Body login={login} />}/> 
		<Route path= "/Register" render={()=> <Register/>}/> {/*createNewUser*/}
		<Route path= "/Login" render={()=> <Login setLogin={setLogin} />}/> {/*login*/}
		<Route path= "/WhyGiveBlood" render={()=> <ReasonsInfo/>}/> {/*React Paragraphs*/}
		<Route path= "/WhoCanGiveBlood" render={()=> <GivingInfo/>}/> {/*React Paragraphs*/}
		<Route path= "/DonationProcess" render={()=> <DonationProcess/>}/> {/*React headers and Paragraphs*/}
		<Route path= "/Profile" render={()=> <Profile/>}/> {/*React */}
		<Route path= "/About" render={()=> <About/>}/> {/*React Paragraph*/}
		</Switch>
		
	</div>;
};

export default App;
