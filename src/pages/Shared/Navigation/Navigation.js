import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Navigation = () => {
    const{user, logOut} = useFirebase();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to='home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        {/* <Nav.Link >
                            <Link to='/login'>Login</Link>
                        </Nav.Link> */}
                        <Nav.Link >
                            {
                                user?.eamil? <button onClick={logOut} className="btn btn-danger">Logout</button>:
                                <Link to='/login'><button className="btn btn-danger">Login</button></Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;