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
  };

  async function addNewUser() {
      console.log(fullName);
    try {
      await axios.post("http://localhost:5000/register", {
        fullName,
        age,
        bloodType,
        address,
        email,
        password,
        phoneNumber,
        image,
        location
      }).then((result) =>{
          console.log(result.data);
      })

      console.log("The user has been created successfully");
    } catch (error) {
      console.log("Error happened while register, please try again");
    }
  }

  return (
    <RegisterContext.Provider value={state}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
