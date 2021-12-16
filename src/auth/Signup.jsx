import { sign } from 'crypto';
import React, { useState } from 'react';
// import { createElement } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './signup.css'

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <Input style={{ backgroundColor: '#e3dac9' }} required type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder='email' />

                </FormGroup>
                <FormGroup>

                    <Input required type='password' minLength={5} onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder='password' autoComplete='on' />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup