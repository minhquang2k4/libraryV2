import React from 'react';
import {
    Container,
    Header,
    Input,
    Form,
    FormGroup,
    FormField,
    Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import style from './register.module.css';

const Register = () => {
    return (
        <Container fluid className={style.register}>
            <div className={style.form}>
                <Header as="h1">Register</Header>
                <Form>
                    <FormGroup widths='equal'>
                        <FormField
                            control={Input}
                            placeholder='Username'
                        />
                        <FormField
                            control={Input}
                            placeholder='Phone number'
                        />
                    </FormGroup>
                    <FormField
                        control={Input}
                        placeholder='Email'
                    />
                    <FormField
                        control={Input}
                        placeholder='Password'
                    />
                    <Button color='linkedin'>Register</Button>
                    <div>
                        Already have an account? <Link to='/login'><b>Login</b></Link>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default Register;