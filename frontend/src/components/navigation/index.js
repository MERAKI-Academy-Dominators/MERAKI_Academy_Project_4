import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import "fontsource-roboto";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./navigation.css"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>({
  profile:{
    color: '#D5D5D5', 
    position:"absolute",
    left: "85%",
    
  },
  logOut: {
    color :'#D5D5D5',
    "&:hover": {
      color: 'black'
    }
  },
  profileIcon:{
    color :'#D5D5D5',
    paddingTop:"20px",
    "&:hover": {
      color: "black"
    }
  }

}))


function Navigation({login,setLogin}) {

  const classes = useStyles();
  
   useEffect(() => {
     if(localStorage.getItem("user")){
      setLogin(true)
     }
   })
  
  



  return (
	  <div >
	  
    <AppBar className='AppBar' color='secondary'>
		<ToolBar>
	  <Link style={{textDecoration: 'none'}} to="/">
          <Button variant="contained"  size='medium'>
            Home
          </Button>
        </Link>

        <Link style={{textDecoration: 'none'}} to="/WhyGiveBlood">
          <Button variant="contained"  size='medium'>
            Why Give Blood
          </Button>
        </Link>
		
        
        <Link to="/WhoCanGiveBlood" style={{textDecoration: 'none'}}>
        <Button variant="contained"  size='medium' >
          Who can give blood
        </Button>
        </Link>
        <Link to="/DonationProcess" style={{textDecoration: 'none'}}> 
        <Button variant="contained"  size='medium' >
          The Donation Proccess
        </Button>
        </Link>
        <Link to="/About" style={{textDecoration: 'none'}}>
        <Button variant="contained"  size='medium' >
          About us
        </Button>
        </Link>

        {login ? <span className={classes.profile}>

         <span className="om_profile">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Profile"
          >
            <span className={classes.profileIcon}  >
            <AccountCircleIcon fontSize="large" id="profile_icon" />  
            </span>
          </Link>

          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <span onClick={()=>{localStorage.clear();setLogin(false)}} className={classes.logOut} >
              Logout
            </span>
          </Link>

         </span>

        </span> : null }

			</ToolBar>
      
      
      </AppBar>	

      


      
        
       
      

      

	</div>
  );
}

export default Navigation;
