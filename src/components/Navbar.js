import React from 'react'
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'; // this require specific import
import { BiAccessibility } from "react-icons/bi";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <BiAccessibility className="navbar-logo" />
          <span className="sr-only">MERN Market</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar
