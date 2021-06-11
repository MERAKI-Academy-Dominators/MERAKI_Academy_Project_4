import React,{useState} from 'react';
import axios from "axios";
import { Route , useHistory } from "react-router-dom";
import login from './login.css'


function Login(){
const[email,setEmail]=useState()
const[message,setMessage]=useState()
const[password,setPassword]=useState()


const storedInfo = ()=>{
    axios.post("http://localhost:5000/login/email" , {email:email} ).then((result)=>{ {localStorage.setItem("user" , JSON.stringify(result.data))}})
}



const login = ()=>{
    axios.post(`http://localhost:5000/login`,{
        email,
        password,
    })
    .then((res)=>{

    console.log(res.data);

    if (res.status == 200) {
        localStorage.setItem("user" , JSON.stringify(res.data))
      setMessage(
       `login successfully`
      );

  } 
})
     
        .catch((err) =>{
        
          
        if(err.response.status==404){
            
            setMessage(
                `The email you've entered is incorrect`
            );
        }else{
            setMessage(
                `The password you've entered is incorrect`
            );
        }
          
           
            
          })}


return(
<div> 

    <h1  className="h1">Save Life</h1>

<div className="form">


    <input className="inputs" type="text" placeholder={`Email`}  onChange={(a)=>{setEmail(a.target.value)}}/>
        <br/>
        <input className="inputs" type="password" placeholder={`Password`}  onChange={(a)=>{setPassword(a.target.value)}}/>
        <br/>
 
<button className="signUp" onClick={login}>
    Login
</button>
{message}
</div>

</div>
)
}


export default Login

