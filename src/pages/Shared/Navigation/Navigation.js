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
                            <Link className="text-decoration-none text-dark me-4" to='/home'>Home</Link>
                            <Link className="text-decoration-none text-dark " to='/allProduct'>All-Product</Link>
                    </Nav>
                    <Nav className="display-flex align-items-center justify-content-center p-2">
                        {user.email && <Link className="text-decoration-none text-dark" to='/dashboard'>Dashboard</Link>}

                        <span className="mx-4 text-danger">{user.displayName}</span>
                        {
                            user.email ? <button onClick={logOut} className="btn btn-danger">Logout</button> :
                                <Link to="/login"><button className="btn btn-danger">Login </button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;