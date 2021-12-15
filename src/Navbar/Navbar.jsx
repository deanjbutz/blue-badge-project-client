import * as React from "react";
import ReactDOM from 'react-dom';
import "./navbar.css"
// import { Container, Row, Col, Button, } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../auth/Auth'
import { Grid, Box } from '@mui/material';


const Navbar = (props) => {



    return (

        <Grid container spacing={5} id="banner">
            <Grid item sx={{ mt: 2, ml:2 }} id="btn">
            {
                (localStorage.getItem('token') &&
                localStorage.getItem('token').includes('Bearer')) ?
                <button id="logout" onClick={props.clearSession}>Log Out</button> :
                <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
            }
            </Grid>
            <Grid item xs={12} sx={{ pb: 6}} id="why">
            <h1 id="welcome">Welcome To The Dungeon!</h1>
            </Grid>
        </Grid>

        // <nav id="nav">
        //     {/* <img src={dragon} alt="dragon" id="dragon" /> */}
        //     <h1 id="welcome">Welcome To The Dungeon!</h1>
        //     {
        //         (localStorage.getItem('token') &&
        //         localStorage.getItem('token').includes('Bearer')) ?
        //         <button id="logout" onClick={props.clearSession}>Log Out</button> :
        //         <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
        //     }

        // </nav>

    )
}

export default Navbar