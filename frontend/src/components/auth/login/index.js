import React,{useState} from 'react';
import axios from "axios";
import { Route } from "react-router-dom";

function Login(){
const[email,setEmail]=useState()
const[message,setMessage]=useState()
const[password,setPassword]=useState()

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

    if (res.data.email && res.data.password  ) {
      setMassage(
       `login successfully`
      );
  } 
})
     
        .catch((err) =>{
        console.log(err.response);
          
        if(err.response.status==404){
            setMassage(
                `The email you've entered is incorrect`
            );
        }else{
            setMassage(
                `The password you've entered is incorrect`
            );
        }
          
           
            
          })}


return(<div className="register">
    <p>Login:</p>
    <input className="sections" type="text" placeholder={`email here`}  onChange={(a)=>{setEmail(a.target.value)}}/>
        <br/>
        <input className="sections" type="password" placeholder={`password here`}  onChange={(a)=>{setPassword(a.target.value)}}/>
        <br/>
 
<button className="register_button section" onClick={()=> {login() ; storedInfo()} }>
    Login
</button>
{message}

</div>)
}


export default Login

