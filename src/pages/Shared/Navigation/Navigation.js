import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Glassy Mart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to='/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to='/allProduct'>All-Product</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >
                            {user.email && <Link to='/dashboard'>Dashboard</Link>}
                        </Nav.Link>
                        <Nav.Link>{user.displayName}</Nav.Link>
                        {/* <Nav.Link >
                            <Link to='/login'>Login</Link>
                        </Nav.Link> */}
                        <Nav.Link >

                            {
                                user.email ? <button onClick={logOut} className="btn btn-danger">Logout</button> :
                                    <button className="btn btn-danger"><Link to="/login">Login</Link></button>
                            }


                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;