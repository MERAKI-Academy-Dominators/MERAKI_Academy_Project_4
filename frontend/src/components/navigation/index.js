import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import {TextField, Select ,MenuItem} from "@material-ui/core";
import "fontsource-roboto";

function Navigation() {
  return (
	  <>
	 
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
			</ToolBar>
      </AppBar>	

	</>
  );
}

export default Navigation;
