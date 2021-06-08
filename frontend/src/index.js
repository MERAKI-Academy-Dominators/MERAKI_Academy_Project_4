// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
// 	<Router>
// 		<App />
// 	</Router>,
// 	document.getElementById('root'),
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//context providers
import RegisterProvider from "./contexts/register";

ReactDOM.render(
  <Router>
    <RegisterProvider>
      <App />
    </RegisterProvider>
  </Router>,
  document.getElementById("root")
);
