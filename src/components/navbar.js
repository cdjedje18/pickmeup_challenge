import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">FindMe</Navbar.Brand>
        </Navbar>
    )
}