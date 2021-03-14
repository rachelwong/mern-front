import React, { useEffect, useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import ItemPanel from '../components/ItemPanel'
const Products = () => {
  const [products, setAllProducts] = useState([])

  const getAllProducts = async () => {
    const { data } = await axios.get(`http://localhost:5000/products`)
    if (data.length > 0) {
      setAllProducts(data)
    }
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <Container>
      <h1>See all our Products</h1>
      <Row>
        {products.map((product, idx) => (
          <ItemPanel key={idx} product={ product} />
        ))}
      </Row>
    </Container>
  )
}

export default Products
