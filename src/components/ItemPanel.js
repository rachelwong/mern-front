import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import iamge from '../assets/productImages/bed.jpeg'

const ItemPanel = ({ product }) => {
  const imagePath = `../../assets/productImages/` + product.image
  const summary = product.description.length > 300 ? product.description.substring(0, 300) + "..." : product.description
  return (
    <Col xs={4} className="item-panel-col">
      <Card className="item-panel">
        {/* <Card.Img variant="top" src={ require(imagePath) } /> */}
        <Card.Body>
          <Card.Title className="item-panel__title">{ product.name }</Card.Title>
          <Card.Text className="item-panel__summary">
            {summary}
          </Card.Text>
        </Card.Body>
          <div className="item-panel__btn-wrapper">
            <Button variant="info" className="item-panel__button">See item</Button>
          </div>
      </Card>
    </Col>
  )
}

export default ItemPanel