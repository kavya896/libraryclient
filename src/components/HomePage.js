import React from "react";
import "./HomePage.css";
import {Link} from "react-router-dom";

function HomePage(){
    return(
        <div className="container">
            <div id="heading">
                <h1 id="wel">Welcome to Myapp..</h1>
            </div>
            <div id="myapp">This app is build completely by using express.js framework from node.js,mongodb as database on server-side, at the client-side I used react.js,react-redux for store management, used HTML and CSS as well.</div>
            <div id="loginBtn">
            <Link to="/login">
            <button className="btn">Login</button>
            </Link>
            <Link to="/register">
            <button className="btn">Sign-in</button>
            </Link>
            </div>
            
        </div>
    )
}

export default HomePage;