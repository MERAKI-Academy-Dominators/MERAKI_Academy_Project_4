import React, { useContext } from 'react';
import { RegisterContext } from './../../../contexts/register';

const Register = () => {
	const registerContext = useContext(RegisterContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		registerContext.addNewUser();
	};

	return (
		<>
			<form >
				<input
					type="text"
					placeholder="fullName here"
					onChange={(e) => registerContext.setFullName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="bloodType here"
					onChange={(e) => registerContext.setBloodType(e.target.value)}
				/>
				<input
					type="number"
					placeholder="age here"
					onChange={(e) => registerContext.setAge(e.target.value)}
				/>
				<input
					type="text"
					placeholder="address here"
					onChange={(e) => registerContext.setAddress(e.target.value)}
				/>
				<input
					type="text"
					placeholder="phoneNumber here"
					onChange={(e) => registerContext.setPhoneNumber(e.target.value)}
				/>
				<input
					type="email"
					placeholder="email here"
					onChange={(e) => registerContext.setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password here"
					onChange={(e) => registerContext.setPassword(e.target.value)}
				/>
				<input
					type="text"
					placeholder="image here"
					onChange={(e) => registerContext.setImage(e.target.value)}
				/>
				<input
					type="text"
					placeholder="location here"
					onChange={(e) => registerContext.setLocation(e.target.value)}
				/>
				<button onClick={handleSubmit}>Register</button>
			</form>
                        {registerContext.userSucc ? <div id="usercreated"><h4 id="h3reg">The user has been created successfully</h4></div> : ""}
                        {registerContext.userFail ? <div id="userfail"><h4 id="h4reg">Error happened while register, please try again</h4>
                         </div> : ""}

			
		</>
	);
};

export default Register;
