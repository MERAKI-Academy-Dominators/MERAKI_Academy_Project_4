import React, { useState } from "react";
import axios from "axios";

export const RegisterContext = React.createContext();

const RegisterProvider = (props) => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [bloodType, setBloodType] = useState("");
  const [ address , setAddress ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [userSucc, setUserSucc] = useState(false);
  const [userFail, setUserFail] = useState(false)
  
  

  const state = {
    setFullName,
    setAge,
    setBloodType,
    setAddress,
    setEmail,
    setPassword,
    setPhoneNumber,
    setImage,
    setLocation,
    addNewUser,
     userSucc,
     userFail,
  };

  async function addNewUser() {
		axios.post('http://localhost:5000/register', {
				fullName,
                email,
                password,
                age,
                address,
                phoneNumber,
                bloodType,
                location
			}).then((response) => {
                if(response.statusText == "Created"){
                    console.log(response)
                setUserSucc(true);}else{
                    setUserFail(true)
    
                }
                
            }).catch( (err)=>{
                setUserFail(true)
            })
	}

  return (
    <RegisterContext.Provider value={state}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
