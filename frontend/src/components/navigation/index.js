import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'

function Navigation({ showLogIn }) {
  return (
	  <>
	 
  
		<ToolBar>
	  <Link to="/">
          <IconButton variant="contained" color="secondary">
            Home
          </IconButton>
        </Link>
		<IconButton variant="contained" color="secondary">
          Why give bood
        </IconButton>
        <IconButton variant="contained" color="secondary">
          Who can give blood
        </IconButton>
        <IconButton variant="contained" color="secondary">
          The Donation Proccess
        </IconButton>
        <IconButton variant="contained" color="secondary">
          About us
        </IconButton>
			</ToolBar>
				

	</>
  );
}

export default Navigation;
