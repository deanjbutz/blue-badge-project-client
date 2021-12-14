import React from "react";
import "./navbar.css"
// import dragon from '../assets/dragon.svg'
import Auth from '../auth/Auth'

const Navbar = (props) => {



    return(
        
            <nav id="nav">
                {/* <img src={dragon} alt="dragon" id="dragon" /> */}
                <h1 id="welcome">Welcome To The Dungeon!</h1>
                {
                    (localStorage.getItem('token') &&
                    localStorage.getItem('token').includes('Bearer')) ?
                    <button id="logout" onClick={props.clearSession}>Log Out</button> :
                    <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
                }
                
            </nav>
        
    )
}

export default Navbar