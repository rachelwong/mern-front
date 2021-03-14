import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const ItemPanel = ({ product }) => {

  return (
    <Col xs={4}>
      <Card className="item-panel">
        <Card.Img variant="top" src={ require(`../assets/productImages/${product.image}`) } />
        <Card.Body>
          <Card.Title>{ product.name }</Card.Title>
          <Card.Text>{ product.description }</Card.Text>
          <Button variant="info">See item</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ItemPanel