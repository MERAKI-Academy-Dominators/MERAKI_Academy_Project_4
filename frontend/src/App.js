


import React from 'react';
import { Route } from 'react-router-dom';
import RequestPage from './components/auth/requestspage/index';
import Login from './components/auth/login/index';



const App = () => {

	return <div className="App">
		<Route path = "/requests/myRequests" component = {RequestPage}/>
		<Route path = "/login/email" component = {Login}/>


	</div>
	
};

export default App;
