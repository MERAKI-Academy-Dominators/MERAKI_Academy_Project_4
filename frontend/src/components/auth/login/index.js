import React,{useState} from 'react';
import {BrowserRouter as Router , Route, Link, Redirect}  from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import axios from "axios";
import login from './login.css'
import Button from "@material-ui/core/Button";


function Login(){
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
        localStorage.setItem("user_image" , JSON.stringify({userImage:"https://pbs.twimg.com/profile_images/740272510420258817/sd2e6kJy.jpg"}))
      setMessage(
       `login successfully`
      );
      settoProfile(true)
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
    <div className="form">
    <h2>Login:</h2>
    <TextField className="sections" type="text" label ='Email'  onChange={(a)=>{setEmail(a.target.value)}}/>
        <br/>
    <TextField className="sections" type="password" label='Password'  onChange={(a)=>{setPassword(a.target.value)}}/>
        <br/>
   


<Button className="signUp" onClick={login}>
    Login
</Button>
{message}
</div>
<h1 className = "doYou">You don't have account ? <Link to = '/Register'>Sign up here</Link></h1>
{toProfile?<Redirect to= '/Profile'></Redirect> :null }
</div>)
}


export default Login

