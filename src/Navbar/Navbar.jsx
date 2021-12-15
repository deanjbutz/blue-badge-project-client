import * as React from "react";
import ReactDOM from 'react-dom';
import "./navbar.css"
// import { Container, Row, Col, Button, } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../auth/Auth'
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';

const Navbar = (props) => {

    // export default function BasicGrid() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} id="banner">
                    <Grid item sx={{ mt:2, ml:2 }} id="btn">
                        <item id="btnContainer">
                            {
                                (localStorage.getItem('token') &&
                                    localStorage.getItem('token').includes('Bearer')) ?
                                    <button id="logout" onClick={props.clearSession}>Log Out</button> :
                                    <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
                            }
                        </item>
                    </Grid>
                    <Grid item xs={12} sx={{ pb: 6, mt:6 }} id="why">
                        <item id="welContainer">
                            <h1 id="welcome">Welcome To The Dungeon!</h1>
                        </item>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    


        // <Grid container spacing={5} id="banner">
        //     <Grid item sx={{ mt: 2, ml:2 }} id="btn">
        //     {
        //         (localStorage.getItem('token') &&
        //         localStorage.getItem('token').includes('Bearer')) ?
        //         <button id="logout" onClick={props.clearSession}>Log Out</button> :
        //         <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
        //     }
        //     </Grid>
        //     <Grid item xs={12} sx={{ pb: 6}} id="why">
        //     <h1 id="welcome">Welcome To The Dungeon!</h1>
        //     </Grid>
        // </Grid>

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

    // )
// }

export default Navbar

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));