import React, { useState } from "react";
import Axios from "axios";
export const RequestFormContext = React.createContext();

const RequestFormProvider = (props) => {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("60be30c8a314951fe86f9754");
  const [bloodType, setBloodType] = useState("");
  const [hospital, setHospital] = useState("");
  const [hospitalArray, setHospitalArray] = useState([]);

  let hospitals = [];

  async function getHospitals() {
    try {
      let hospitalsInfo = await Axios.get("http://localhost:5000/hospitals")
      hospitals = hospitalsInfo.data;
      setHospitalArray(hospitals);

      
    } catch (error) {
      setMessage("Unable to find hospitals");
    } 
  }

  async function createRequest() {
    try {
      await Axios.post("http://localhost:5000/request/create", {
        userId,
        bloodType,
        hospital,
      });
      // setMessage("Request created successfully");
    } catch (error) {
      setMessage("Unable to create request. Please try again");
    }
  }

  const state = {
    setUserId,
    setBloodType,
    hospitalArray,
    setHospital,
    message,
    getHospitals,
    createRequest,
  };

  return (
    <RequestFormContext.Provider value={state}>
      {props.children}
    </RequestFormContext.Provider>
  );
};

export default RequestFormProvider;
