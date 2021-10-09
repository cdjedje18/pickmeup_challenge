import React from 'react';
import { Navbar, Button, Form } from 'react-bootstrap';
import { geolocated } from "react-geolocated";

export const NavBar = ({ getCurrentLocation }) => {

    const onClick = () => {
        getCurrentLocation()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">FindMe</Navbar.Brand>
            <Form className="d-flex">
                <Button variant="outline-success" onClick={() => onClick()}>Find me</Button>
            </Form>
        </Navbar>
    )
}