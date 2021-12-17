import React from "react";
import Login from './Login';
import { Container, Row, Col, Modal, Button } from "reactstrap";
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth.css'

const Auth = (props) => {



    return (
        // <div>
        <Modal isOpen={true}>
            <Container className="auth-container">
                <Row>
                    <Col md="6">
                        <Signup updateToken={props.updateToken} toggleLoginSignup={props.toggleLoginSignup} />
                    </Col>
                    <Col md="6" className="login-col">
                        <Login updateToken={props.updateToken} toggleLoginSignup={props.toggleLoginSignup} />
                    </Col>
                </Row>
            </Container>
            <Button onClick={props.toggleLoginSignup} className="close-button">Close</Button>
        </Modal>
        // </div>
    )
}

export default Auth;