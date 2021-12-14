import React from "react";
import "./navbar.css"
// import dragon from '../assets/dragon.svg'

const Navbar = (props) => {

    return(
        
            <nav id="nav">
                {/* <img src={dragon} alt="dragon" id="dragon" /> */}
                <h1 id="welcome">Welcome To The Dungeon!</h1>
                <button id="logout" onClick={props.clearSession}>Log Out</button>
            </nav>
        
    )
}

export default Navbar