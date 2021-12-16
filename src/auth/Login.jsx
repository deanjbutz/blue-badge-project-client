import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './login.css'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.toggleLoginSignup();

        if (email) {
            // fetch(`http://localhost:${process.env.PORT}/user/login`, {
            fetch(`http://localhost:3025/user/login`, {
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
            alert("Please enter an Email")
        }
        
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input required type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder='email'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input required type='password' minLength={5} onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder='password' autoComplete='on'/>
                </FormGroup>
                <Button type="submit" >Login</Button>
            </Form>
        </div>
    )
}

export default Login;