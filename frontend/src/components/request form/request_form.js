import React, { useContext, useEffect } from "react";
import { RequestFormContext } from "../../contexts/request_form_context";

export default function RequestForm() {
  const requestFormContext = useContext(RequestFormContext);

  const submitResults = (event) => {
    event.preventDefault();
    requestFormContext.createRequest();
  };

  useEffect(() => {
    requestFormContext.getHospitals();
  }, [])

  return (
    <div>
      <form onSubmit={submitResults}>
        <label>
          Full Name:{" "}
          <input
            type="text"
            placeholder="Full Name"
            onChange={(event) => {
              // requestFormContext.setUserId(localStorage.getItem("userId"));
            }}
          />
        </label>
        <br />

        <label>
          Blood Type:{" "}
          <input
            type="text"
            placeholder="Blood Type"
            onChange={(event) => {
              requestFormContext.setBloodType(event.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Hospital:{" "}
          <select
            onSelect={(event) => {
              {requestFormContext.setHospital(event.target.value)};
            }}
          >
            {requestFormContext.hospitalArray.map((element, index) => {
            return <option key={index} value={element._id}>{element.name}</option>
           })}
          </select>
        </label>
        <br />

        <button>Submit</button>
      </form>
      {requestFormContext.message && <div>{requestFormContext.message}</div>}
    </div>
  );
}
