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
<<<<<<< HEAD
                    (localStorage.getItem('token')) ?
                    <button id="logout" onClick={props.clearSession}>Log Out</button> :
                    <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
                }
                {/* // <button id="logout" onClick={props.clearSession}>Log Out</button> */}
=======
                    (localStorage.getItem('token') &&
                    localStorage.getItem('token').includes('Bearer')) ?
                    <button id="logout" onClick={props.clearSession}>Log Out</button> :
                    <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
                }
                
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
            </nav>
        
    )
}

export default Navbar