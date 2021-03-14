import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BiAccessibility } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <hr />
        <Row>
          <Col>
            <Link to="/">
              <BiAccessibility className="footer-logo"/>
            </Link>
          </Col>
          <Col xs lg="2">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="products" className="footer-link">Products</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </Col>
          <Col xs lg="2">
            <small className="footer-blurb">A non-profit initiative Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. &copy;	2021</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
