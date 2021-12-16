import * as React from "react";
import ReactDOM from 'react-dom';
import "./navbar.css"
// import { Container, Row, Col, Button, } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../auth/Auth'
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Navbar = (props) => {

    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '2.5rem',
        '@media (min-width:600px)': {
            fontSize: '4rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        },
    };

    return (
        <Typography component="div">
            <Grid container spacing={5} id="banner">
                <Grid item sx={{ mt: 2, ml: 3 }} id="btn">
                    <item id="btnContainer">
                        {
                            (localStorage.getItem('token') &&
                                localStorage.getItem('token').includes('Bearer')) ?
                                <button id="logout" onClick={props.clearSession}>Log Out</button> :
                                <button id="login-signup" onClick={props.toggleLoginSignup}>Login/Signup</button>
                        }
                    </item>
                </Grid>
                <Grid item xs={12} sx={{ pb: 6, mt: 6 }} id="why">
                    <item id="welContainer">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" id="welcome">Welcome To The Dungeon!</Typography>
                        </ThemeProvider>
                    </item>
                </Grid>
            </Grid>
        </Typography>
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

