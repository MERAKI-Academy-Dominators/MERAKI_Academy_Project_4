import MyOneRequest from "./MyOneRequest"
import axios from 'axios'
import React,{useState , useEffect} from 'react'
import "./myrequest.css"

const MyRequest = () => {

    const[myRequest,setMyRequest]=useState()

    const getMyRequest = async ()=>{
      await axios.post("http://localhost:5000/request/myRequests",{
            userId : JSON.parse(localStorage.getItem('user'))._id
        }).then((result)=>{console.log(result.data)
            setMyRequest(result.data)})
 
    }

    useEffect(()=>{
        
        getMyRequest()
        console.log(myRequest);
        

    },[])

    return (
        <div id = "MyRequset">

         {myRequest ? myRequest.map((elem,i)=>{
            return <MyOneRequest reqId={elem._id}  bloodType = {elem.bloodType}   hospital={elem.hospitalId.name} date={elem.date}/>}):null}
         
            
        </div>
    )
}

export default MyRequest
