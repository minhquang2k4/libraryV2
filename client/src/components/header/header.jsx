import React, { useContext } from 'react';
import {
    Container,
    Menu,
    Dropdown
} from 'semantic-ui-react';
import styles from './header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/authProvider.jsx';

const Header = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    console.log('auth', auth);

    const handleLogout = () => {
        setAuth(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');

        const deleteCookie = (name) => {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

        deleteCookie('token');
        navigate('/login');
    }

    return (
        <Container fluid>
            <Menu className={styles.header} >
                <Menu.Menu positon='left'>
                    <Menu.Item as={Link} to='/'>
                        <div className={styles.logo}>
                            TMS
                        </div>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu>
                    <Menu.Item as={NavLink} to='/' className={styles.headerText} >
                        Home
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/borrow' className={styles.headerText} >
                        Borrow
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/statistic' className={styles.headerText} >
                        Statistic
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/manager' className={styles.headerText} >
                        Manager
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu position='right'>
                    {auth ? (
                        <Menu.Item>
                            <Dropdown text={localStorage.getItem('username')} className={styles.headerText} >
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout} >Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    ) : (
                        <Menu.Item as={NavLink} to='/login' className={styles.headerText} > Login </Menu.Item>
                    )
                    }
                </Menu.Menu>
            </Menu>
        </Container>
    );
};

export default Header;
