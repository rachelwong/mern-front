import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Row, Button, ListGroup } from 'react-bootstrap'
import sampleImage from '../assets/images/maxBender.jpeg'
import { BiCartAlt, BiDirections } from "react-icons/bi";
import { Link } from 'react-router-dom'
const Product = () => {
  const { productslug } = useParams()
  console.log('productslug:', productslug)

  const [product, setProduct] = useState(null)


  return (
    <div className="product-wrapper">
      <div className="product-left e-dark-green">
        <div className="product-left__content">
        <div className="product-img-wrapper">
          <img src={ sampleImage } alt="product closeup" />
          </div>
          </div>
      </div>
      <div className="product-right e-lite-green">
        <Container>
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>Vestibulum ante ipsum primis in faucibus orci.</ListGroup.Item>
                <ListGroup.Item>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus..</ListGroup.Item>
                <ListGroup.Item>Vestibulum ante ipsum primis in faucibus orci.</ListGroup.Item>
                <ListGroup.Item>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus..</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Button href="/" variant="info" className="e-button">
              Add to cart
              <BiCartAlt className="e-button__icon"/>
            </Button>
            <Link to="/" className="e-button--link">
              Ask a question
              <BiDirections className="e-button--link__icon" />
            </Link>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Product
