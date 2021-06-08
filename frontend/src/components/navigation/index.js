import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return <div className="App">Navigation component
	
    <Link to="/login">Login</Link>
	</div>;
	
};

export default Navigation;

// import React from 'react';
// import './../App.css';
// import {Link} from "react-router-dom"



// const Navigation=()=>{
//     return(
//         <div style={{display:"flex", gap:"16px"}}>
//     <Link to="/login">Login</Link>
//     <Link to="/register">Register</Link>     
//     <Link to="/dashboard">dashboard</Link>          

//     </div>
// )};
// export default Navigation


