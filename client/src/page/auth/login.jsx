import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Header,
    Input,
    FormField,
    Form,
    Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import style from './login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn form gửi yêu cầu HTTP POST mặc định
        try {
            const response = await axios.post('http://localhost:8004/api/v1/login', {
                email: email,
                password: password
            }, {
                withCredentials: true 
            });

            if (response.status === 200) {
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('isAuthenticated', true);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                alert('Incorrect email or password!');
            } else {
                alert('An error occurred. Please try again later!');
            }
        }
    };

    return (
        <Container fluid className={style.login}>
            <div className={style.form}>
                <Header as="h1">Login</Header>
                <Form onSubmit={handleSubmit}>
                    <FormField>
                        <Input
                            placeholder='Email'
                            type= 'email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormField>
                    <Button color='linkedin' type='submit'>Login</Button>
                    <div>
                        Don't have an account? <Link to='/register'><b>Register</b></Link>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
