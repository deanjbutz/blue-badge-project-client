import React, { useState, useEffect } from 'react';
// import { createElement } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './signup.css'

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('')

    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (email) => {
        const inputEmail = email;

        if (emailRegex.test(inputEmail)) {
            setIsValid(true);
            setMessage('');
        } else {
            setIsValid(true);
            setMessage('Please enter a valid email')
        }
    };

    useEffect(() => {
        validateEmail(email)
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();

        props.toggleLoginSignup();

        if (email) {
            fetch("http://localhost:3025/user/register", {
                method: "POST",
                body: JSON.stringify({
                    "email": email,
                    "password": password
                }),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
                .then(res => res.json())
                .then(data => {
                    props.updateToken(data.token);
                    alert(data.message);
                })
                .then(props.toggleLoginSignup())
        } else {
            alert("Failed to sign up. Please try again.")
        }

    }

    return (
        <div>
            <h1 id='signup'>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <Label htmlFor="email">Email</Label> */}
                    <Input style={{backgroundColor: '#e3dac9'}} required type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder='email'/>
                    {
                        email !== '' ?
                        <div style={{color: "#c92216"}}>{message}</div> :
                        null
                    }
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor="password">Password</Label> */}
                    <Input style={{backgroundColor: '#e3dac9'}} required type='password' minLength={5} onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder='password' autoComplete='on'/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup