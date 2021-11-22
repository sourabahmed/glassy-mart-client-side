import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="text-danger">Glassy Mart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link className="text-decoration-none text-dark" to='/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className="text-decoration-none text-dark" to='/allProduct'>All-Product</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >
                            {user.email && <Link className="text-decoration-none text-dark" to='/dashboard'>Dashboard</Link>}
                        </Nav.Link>
                        <Nav.Link><h5>{user.displayName}</h5></Nav.Link>
                        {/* <Nav.Link >
                            <Link to='/login'>Login</Link>
                        </Nav.Link> */}
                        <Nav.Link >

                            {
                                user.email ? <button onClick={logOut} className="btn btn-danger">Logout</button> :
                                    <Link to="/login"><button className="btn btn-danger">Login </button></Link>
                            }


                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;