import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashBordNavigation = () => {

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand >Glassy Mart</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link ><Link className="text-decoration-none text-dark" to='/home'>Home</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default DashBordNavigation;