import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ItemPanel = ({ product }) => {
  return (
    <Card className="item-panel">
      <Card.Img variant="top" src={ product.image } />
      <Card.Body>
        <Card.Title>{ product.name }</Card.Title>
        <Card.Text>{ product.description }</Card.Text>
        <Button variant="info">See item</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemPanel