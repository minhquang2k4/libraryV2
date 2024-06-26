import {
    Container,
    Menu,
    // Dropdown
} from 'semantic-ui-react';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
                    {/* chua login */}
                    <Menu.Item as={NavLink} to='/login' className={styles.headerText} > Login </Menu.Item>
                    {/* login roi */}
                    {/* <Menu.Item>
                        <Dropdown text='User' className={styles.headerText} >
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/login'>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item> */}
                </Menu.Menu>
            </Menu>
        </Container>
    );
};

export default Header;
