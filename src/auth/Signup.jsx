import React, { useState } from 'react';
import { createElement } from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

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
            .then(data => props.updateToken(data.sessionToken))
        } else {
            alert("Please enter a Username")
        }
        
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;