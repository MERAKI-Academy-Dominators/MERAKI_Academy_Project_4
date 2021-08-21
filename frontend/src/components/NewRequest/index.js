import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewRequest.css";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function NewRequest({ hospitals }) {
  const classes = useStyles();

  //const[hospitals,setHospitals]=useState()
  const [bloodType, setBloodType] = useState();
  const [hospital, setHospital] = useState();
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(false);

  /*const getHospitals = ()=>{
    axios.get("http://localhost:5000/hospitals").then((result)=>{setHospitals(result.data)})
   }*/

  const funBloodtype = (e) => {
    setBloodType(e.target.value);
  };

  const hospitalPicked = (e) => {
    setHospital(e.target.value);
  };

  const createRequest = () => {
    if (bloodType && hospital) {
      axios
        .post("http://localhost:5000/request/create", {
          userId: JSON.parse(localStorage.getItem("user"))._id,
          bloodType: bloodType,
          hospital: hospital,
        })
        .then((result) => {
          setCreated(true);
          setError(false);
        })
        .catch((err) => {});
    } else {
      setError(true);
    }
  };

  return (
    <div id="makereqq">
      <Select
        variant="filled"
        className="selectmake"
        value=""
        displayEmpty
        onChange={funBloodtype}
      >
        <MenuItem value="">{bloodType ? bloodType : "Blood Type"}</MenuItem>
        <MenuItem value="A+">A+</MenuItem>
        <MenuItem value="A-">A-</MenuItem>
        <MenuItem value="AB+">AB+</MenuItem>
        <MenuItem value="AB-">AB-</MenuItem>
        <MenuItem value="B+">B+</MenuItem>
        <MenuItem value="B-">B-</MenuItem>
        <MenuItem value="O+">O+</MenuItem>
        <MenuItem value="O-">O-</MenuItem>
      </Select>
      &nbsp;&nbsp;&nbsp; 
      
      <Select
        variant="filled"
        className="selectmake"
        value=""
        displayEmpty
        onChange={hospitalPicked}
      >
        <MenuItem value="">{hospital ? hospital : "Hospital"}</MenuItem>
        {hospitals
          ? hospitals.map((elem, i) => {
              return (
                <MenuItem key={i} value={elem}>
                  {elem}
                </MenuItem>
              );
            })
          : null}
      </Select>
      <br/>
      <br/>
      &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp; 
      <Button  variant="contained"  onClick={createRequest}>
        Request
      </Button>

      {created ? <p className="messageMake">Created Successfully</p> : null}
      {error ? (
        <p className="messageMake">Please Choose All The Fields</p>
      ) : null}
    </div>
  );
}

export default NewRequest;
