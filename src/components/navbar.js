import React from 'react';
import { Navbar, Button, Form } from 'react-bootstrap';

export const NavBar = ({ getCurrentLocation }) => {

    const onClick = () => {
        // console.log("hello")
        getCurrentLocation()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand href="#home">FindMe</Navbar.Brand>
            <div>
                <Button type="button" variant="outline-success" onClick={() => onClick()}>Find me</Button>
            </div>
        </Navbar>
    )
}