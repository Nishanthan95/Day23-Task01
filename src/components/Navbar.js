import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const NavigationBar = () => {
    const { cart } = useContext(CartContext);
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#shop/all">All Items</NavDropdown.Item>
                            <NavDropdown.Item href="#shop/specials">Specials</NavDropdown.Item>
                            <NavDropdown.Item href="#shop/new">New Arrivals</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart">
                            Cart <span className="badge bg-secondary">{cartItemCount}</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
