import React from "react";
import "./navbar.css"
import { Container, Row, Col, Button, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../auth/Auth'

const Navbar = (props) => {



    return (

    

        <Container fluid id="banner">
            <Row>
                <Col>
                </Col>
                <Col className="col-7 row align-items-center"  id="cntCol">
                    <h1>Welcome To The Dungeon!</h1>
                </Col>
                <Col className="row-1">
                    {
                        (localStorage.getItem('token') &&
                            localStorage.getItem('token').includes('Bearer')) ?
                            <Button className="btn" onClick={props.clearSession}>Log Out</Button> :
                            <Button className="btn" onClick={props.toggleLoginSignup}>Login/Signup</Button>
                    }
                </Col>
            </Row>

         </Container>

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