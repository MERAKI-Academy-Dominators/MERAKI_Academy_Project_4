import React,{useState , useEffect }  from 'react';
import axios from "axios";
import "./NewRequest.css"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';



function NewRequest ({hospitals}) {
    
   
   //const[hospitals,setHospitals]=useState()
   const[bloodType,setBloodType]=useState("A+")
   const[hospital,setHospital]=useState("JU university")
   const[created,setCreated]=useState(false)
   
   
   /*const getHospitals = ()=>{
    axios.get("http://localhost:5000/hospitals").then((result)=>{setHospitals(result.data)})
   }*/

   
    const funBloodtype = (e)=>{
     setBloodType(e.target.value)
    }

    const hospitalPicked = (e)=>{
        setHospital(e.target.value)  
    }






    const createRequest = ()=>{
        axios.post("http://localhost:5000/request/create" , {
            userId : JSON.parse(localStorage.getItem('user'))._id ,
             bloodType : bloodType ,
              hospital : hospital
        }).then((result)=>{
            console.log(result)
            setCreated(true)

        }).catch((err)=>{
             
        })
        
        
    }

    
    
    

   

    return (
        <div>


     
        <Select value="" displayEmpty
            onChange={funBloodtype}  >
         <MenuItem value="">Blood Type</MenuItem>       
         <MenuItem value="A+">A+</MenuItem>
         <MenuItem value="A-">A-</MenuItem>
         <MenuItem value="AB+">AB+</MenuItem>
         <MenuItem value="AB-">AB-</MenuItem>
         <MenuItem value="B+">B+</MenuItem>
         <MenuItem value="B-">B-</MenuItem>
         <MenuItem value="O+">O+</MenuItem>
         <MenuItem value="O-">O-</MenuItem>
        </Select>


        
       





       
       
        



        <Select  value="" displayEmpty onChange={hospitalPicked}  >
        <MenuItem value="">Hospital</MenuItem> 
        {hospitals? hospitals.map((elem,i)=>{
            return <MenuItem key={i} value={elem}>{elem}</MenuItem> }) : null
        }




        </Select>

        <Button onClick={createRequest}>Request</Button>

       {created? <p>Created Successfully</p> : null }

        
       


        </div>

        
    )
}

export default NewRequest
