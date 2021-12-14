import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

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
<<<<<<< HEAD
            .catch(err => alert(err))
=======
            .then(props.toggleLoginSignup())

>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
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
                    <Input required type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
<<<<<<< HEAD
                    <Input required type="password" minLength={5} onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
=======
                    <Input required type='password' minLength={5} onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
                </FormGroup>
                <Button type="submit" >Login</Button>
            </Form>
        </div>
    )
}

export default Login;