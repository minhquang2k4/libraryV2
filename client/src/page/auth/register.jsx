import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Header,
    Input,
    Form,
    FormGroup,
    FormField,
    Button,
} from 'semantic-ui-react';
import style from './register.module.css';

const Register = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfPassword, setCfPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userName, phoneNumber, email, password, cfPassword);

        if (phoneNumber.length < 10 || !/^\d+$/.test(phoneNumber)) {
            alert('Phone number must be at least 10 digits.');
            return;
        }

        if (password !== cfPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8004/api/v1/register', {
                userName: userName,
                phoneNumber: phoneNumber,
                email: email,
                password: password
            });

            if (response.status === 201) {
                alert('User created successfully');
                navigate('/login');
            }
        } catch (error) {
            if(error.response && error.response.status === 409) {
                alert('Email already exists');
            } else {
                alert('An error occurred. Please try again later!');
            }
        }

    }


return (
    <Container fluid className={style.register}>
        <div className={style.form}>
            <Header as="h1">Register</Header>
            <Form onSubmit={handleSubmit}>
                <FormGroup widths='equal'>
                    <FormField
                        control={Input}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder='Username'
                        required
                    />
                    <FormField
                        control={Input}
                        value={phoneNumber}
                        type='tel'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='Phone number'
                        required
                    />
                </FormGroup>
                <FormField
                    control={Input}
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                />
                <FormField
                    control={Input}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
                <FormField
                    control={Input}
                    type='password'
                    value={cfPassword}
                    onChange={(e) => setCfPassword(e.target.value)}
                    placeholder='Confirm password'
                    required
                />
                <Button color='linkedin' type='submit' >Register</Button>
                <div>
                    Already have an account? <Link to='/login'><b>Login</b></Link>
                </div>
            </Form>
        </div>
    </Container>
);
}

export default Register;