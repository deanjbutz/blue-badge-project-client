import React, {useState, useEffect} from "react";
import Login from './Login';
import { Container, Row, Col } from "reactstrap";
import Signup from './Signup';

const Auth = (props) => {

    

    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;