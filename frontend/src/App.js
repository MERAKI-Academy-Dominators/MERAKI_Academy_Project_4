import React from 'react';
import { Route } from 'react-router-dom';
import Demand from "./components/auth/why-give-blood/Demand";
import Type from "./components/auth/why-give-blood/Type";
import How from "./components/auth/why-give-blood/How";


const App = () => {
	return <div>   
	<Route exact path = "/Demand" component={Demand}/>
	<Route exact path = "/Type" component={Type}/>
	<Route exact path = "/How" component={How}/>

	</div>
};

export default App;
