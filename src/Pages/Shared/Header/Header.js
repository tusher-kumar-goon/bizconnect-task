import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img
        className="d-block w-75"
        src={logo}
        alt="First slide"
       /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end header-text">
                        <Nav.Link as={HashLink}  to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink}  to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink}  to="/home#blog">Blog</Nav.Link>
                        <Nav.Link as={HashLink}  to="/home#pricing">Pricing</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;