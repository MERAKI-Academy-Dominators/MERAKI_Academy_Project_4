import React, { useState } from "react";
import {
  Route,
  Link,
  useParams,
  useHistory,
  Switch,
  Redirect,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import './Body.css'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'


function Body() {
  const [toLogin, settoLogin] = useState(false);
  const toLogIn = () => {
    settoLogin(true);
  };

  return (
    <>
    <Box className='Body'>

    <Typography variant = 'h2'>Life Stream</Typography>
      <Typography variant = 'h3'>Connecting blood donors with recipients</Typography>
      <Button variant='contained' onClick={toLogIn}>Donate now </Button>
      {toLogin ? <Redirect to="/Login" /> : null}

      
    </Box>
    </>
  );
}

export default Body;
