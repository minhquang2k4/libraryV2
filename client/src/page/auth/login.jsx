import React from 'react';
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
    return (
        <Container fluid className={style.login}>
            <div className={style.form}>
                <Header as="h1">Login</Header>
                <Form>
                    <FormField>
                        <Input placeholder='Email' />
                    </FormField>
                    <FormField>
                        <Input placeholder='Password' />
                    </FormField>
                    <Button type='submit' color='linkedin'>Login</Button>
                    <div>
                        Don't have an account? <Link to='/register'><b>Register</b></Link>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default Login;