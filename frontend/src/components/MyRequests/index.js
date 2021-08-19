import RequestCard from "./RequestCard"
import ConfirmedCandidates from "./ConfirmedCandidates"
import axios from 'axios'
import React,{useState , useEffect} from 'react'
import "./MyRequest.css"
import BackspaceIcon from '@material-ui/icons/Backspace';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



const MyRequest = () => {

    const[myRequests, setMyRequests] = useState()
    const[conCandidates, setConCandidates] = useState()
    const [hideCandidates, setHideCandidates] = useState(true)
    const getMyRequests = async ()=>{
      await axios.post("http://localhost:5000/request/myRequests",{
            userId : JSON.parse(localStorage.getItem('user'))._id
        }).then((result)=>{

            setMyRequests(result.data)})
 
    }


    useEffect(()=>{
        
        getMyRequests()
        
        

    })









    return (
        <div id = "MyRequset">
            

        {hideCandidates&&myRequests ? myRequests.map((elem,i)=>{
            return <RequestCard setHideCandidates = {setHideCandidates} conCandidates = {conCandidates} setConCandidates={setConCandidates} key={i} myRequests= {myRequests} reqId={elem._id}  bloodType = {elem.bloodType}   hospital={elem.hospitalId.name} date={elem.date}/>}):null}
        
        {conCandidates ? conCandidates.map((elem,i)=>{
            return <ConfirmedCandidates setHideCandidates = {setHideCandidates} setConCandidates={setConCandidates}  fullName = {elem.fullName} phoneNumber={elem.phoneNumber} key={i} bloodType= {elem.bloodType} />}):null}
            

            {conCandidates &&  <ArrowBackIosIcon id="conBack" onClick= {()=>{setConCandidates(false);setHideCandidates(true) }}/> }


          

           
         </div>

         




        

       
    )
}

export default MyRequest
