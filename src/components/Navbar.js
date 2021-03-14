import React from 'react'
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'; // this require specific import
import { BiAccessibility, BiSearchAlt } from "react-icons/bi";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="main-nav">
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
            <FormControl type="text" placeholder="Search" className="mr-sm-2 navbar__input" />
            <Button className="navbar__button">
              <BiSearchAlt />
              <span className="sr-only">Search site</span>
            </Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar
