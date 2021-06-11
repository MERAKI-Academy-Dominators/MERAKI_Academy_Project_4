import React from 'react';
import { Route } from 'react-router-dom';
import Demand from "./components/auth/why-give-blood/Demand";
import How from "./components/auth/why-give-blood/How";
import Type from "./components/auth/why-give-blood/Type";

const App = () => {
	return <div>
	<Route exact path = "/Demand" component={Demand}/>
	<Route exact path = "/How" component={How}/>
	<Route exact path = "/Type" component={Type}/>

	</div>
};

export default App;
