import React,{useState} from 'react';
import {BrowserRouter as Router , Route, Link, Redirect}  from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import axios from "axios";
import login from './login.css'
import Button from "@material-ui/core/Button";


function Login({setLogin}){
const[email,setEmail]=useState()
const[message,setMessage]=useState()
const[password,setPassword]=useState()
const[toProfile,settoProfile]=useState(false)


const storedInfo = ()=>{
    axios.post("http://localhost:5000/login/email" , {email:email} ).then((result)=>{ {localStorage.setItem("user" , JSON.stringify(result.data))}})
}

//JSON.parse(window.localStorage.getItem('user'));


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
      settoProfile(true)
      setLogin(true)
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
    <div className="h1">
    <div   className="form">
    <h2>Login</h2>
    <TextField  variant="filled" className="sections" type="text" label ='Email'  onChange={(a)=>{setEmail(a.target.value)}}/>
        <br/>
    <TextField   variant="filled" className="sections" type="password" label='Password'  onChange={(a)=>{setPassword(a.target.value)}}/>
        <br/>
        <br/>


<Button  variant="contained"  className="signUp" onClick={login}>
    Login
</Button>
<br/>
<br/>
<div >
<p id="agreement"> {message}</p>
<p id = "agreement">You don't have account ? <Link className="sign"  to = '/Register'>Sign up here</Link></p>
{toProfile?<Redirect to= '/Profile'></Redirect> :null }
</div>

</div>

</div>)
}


export default Login

