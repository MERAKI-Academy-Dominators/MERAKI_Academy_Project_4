import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/auth/signUp/register';
import Login from './components/auth/login/index';

const App = () => {
	return <div className="App">
		<Register />
		<Login />
	</div>;
};

export default App;



