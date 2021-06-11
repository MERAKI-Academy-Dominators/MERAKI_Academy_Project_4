import axios from 'axios'
import React,{useState , useEffect} from 'react'
import OneReq from "./oneReq"







function MatchedRequests() {

    const[matched,setMatched]=useState()

    const getMatched = ()=>{
        axios.post("http://localhost:5000/request/matched",{
            bloodType : (JSON.parse(localStorage.getItem('user')).bloodType),
            id : (JSON.parse(localStorage.getItem('user'))._id)
        }).then((result)=>{
            setMatched(result.data)
        console.log(result)})

    }

    useEffect(()=>{
        
            getMatched()
        

    },[])













    return (
        <div id="Matched">
            {matched ? matched.map((elem,i)=>{
                if((JSON.parse(localStorage.getItem('user'))._id) !== (elem.userId._id)){ 
                return <OneReq getMatched = {getMatched} key={i} reqId ={elem._id} fullName={elem.userId.fullName} bloodType={elem.bloodType} hospital={elem.hospitalId.name} location={elem.hospitalId.location} phone={elem.hospitalId.phoneNumber}  date={elem.date}
                 />
            }}):null}  
           
            
        </div>
    )
}







export default MatchedRequests
