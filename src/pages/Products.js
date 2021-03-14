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
    <div className="products-wrapper">
    <Container>
      <div className="e-wrapper__heading">
        <h3>Some of our products ...</h3>
        <hr />
      </div>
      <Row>
        {products.map((product, idx) => (
          <ItemPanel key={idx} product={ product} />
        ))}
      </Row>
      </Container>
    </div>
  )
}

export default Products
