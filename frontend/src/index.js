import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import RequestFormProvider from "./contexts/request_form_context";

ReactDOM.render(
	<Router>
		{/* <RequestFormProvider> */}
		<App />
		{/* </RequestFormProvider> */}
	</Router>,
	document.getElementById('root'),
);
