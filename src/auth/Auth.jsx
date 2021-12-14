import React, {useState, useEffect} from "react";
import Login from './Login';
<<<<<<< HEAD
import { Container, Row, Col, Modal, Button, } from "reactstrap";
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import { Container, Row, Col, Modal, Button } from "reactstrap";
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c

const Auth = (props) => {

    

    return (
<<<<<<< HEAD

        <div>
=======
        // <div>
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
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
                <Button onClick={props.toggleLoginSignup}>Close</Button>
            </Modal>
<<<<<<< HEAD
        </div>
=======
        // </div>
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
    )
}

export default Auth;