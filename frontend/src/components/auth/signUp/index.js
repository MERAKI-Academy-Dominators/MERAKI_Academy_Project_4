import React, { useContext } from 'react';
import {Redirect } from 'react-router-dom';
import { RegisterContext } from './../../../contexts/register';
import TextField from '@material-ui/core/TextField'

const Register = () => {
	const registerContext = useContext(RegisterContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		registerContext.addNewUser();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<TextField 
					variant= 'filled'
					type="text"
					label ="FullName"
					onChange={(e) => registerContext.setFullName(e.target.value)}
				/>
				<TextField 
					variant= 'filled'
					type="email"
					label ="Email"
					onChange={(e) => registerContext.setEmail(e.target.value)}
				/>
				<TextField 
					variant= 'filled'
					type="password"
					label = "Password"
					onChange={(e) => registerContext.setPassword(e.target.value)}
				/>
				<TextField 
					variant= 'filled'
					type="number"
					label = "Age"
					onChange={(e) => registerContext.setAge(e.target.value)}
				/>
				<TextField 
					variant= 'filled'
					type="text"
					label ="Address"
					onChange={(e) => registerContext.setAddress(e.target.value)}
				/>
				<TextField 
					variant= 'filled'
					type="text"
					label ="Phone Number"
					onChange={(e) => registerContext.setPhoneNumber(e.target.value)}
				/>
                <TextField 
					variant= 'filled'
					type="text"
					label = "Blood Type"
					onChange={(e) => registerContext.setBloodType(e.target.value)}
				/>
                <TextField 
					variant= 'filled'
					type="text"
					label = "Location"
					onChange={(e) => registerContext.setLocation(e.target.value)}
				/>
				<button>Register</button>
				{registerContext.toLogIn?<Redirect to= '/Login'></Redirect> :null }
			</form>
            {registerContext.userSucc ? <div id="usercreated"><h4 id="h3reg">The user has been created successfully</h4></div> : ""}
            {registerContext.userFail ? <div id="userfail"><h4 id="h4reg">Error happened while register, please try again</h4>
             </div> : ""}



			
		</>
	);
};

export default Register;