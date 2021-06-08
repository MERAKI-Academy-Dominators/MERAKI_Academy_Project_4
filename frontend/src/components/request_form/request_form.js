import React, { useState, useEffect } from "react";
import axios from "axios";

function MakeRequest() {
  const [hospitals, setHospitals] = useState();
  const [bloodType, setBloodType] = useState("A+");
  const [hospital, setHospital] = useState();
  const [created, setCreated] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/hospitals").then((result) => {
      setHospitals(result.data);
    });
  });

  const funBloodType = (e) => {
    setBloodType(e.target.value);
  };

  const hospitalPicked = (e) => {
    setHospital(e.target.value);
  };

  const createRequest = () => {
    axios
      .post("http://localhost:5000/request/create", {
        userId: JSON.parse(localStorage.getItem("user"))._id,
        bloodType: bloodType,
        hospital: hospital,
      })
      .then((result) => {
        console.log(result);
        setCreated(true);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <select onChange={funBloodType} id="bloodType">
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>

      <select onChange={hospitalPicked} name="hospital" id="hospital">
        {hospitals
          ? hospitals.map((elem, i) => {
              return (
                <option key={i} value={elem}>
                  {elem}
                </option>
              );
            })
          : null}
      </select>

      <button onClick={createRequest}>Request</button>

      {created ? <p>Created Successfully</p> : null}
    </div>
  );
}

export default MakeRequest;
