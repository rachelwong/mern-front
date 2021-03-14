import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import MainCarousel from '../components/MainCarousel'
import ItemPanel from '../components/ItemPanel'

const Home = () => {

  const [latestProducts, setLatestProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('http://localhost:5000/products')
    if (res.data.length > 0) {
      setLatestProducts(res.data.slice(0, 3))
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <MainCarousel />
      <Container>
        <p className="home-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      </Container>
      <Container className="home-products">
        <Row>
          <h3>Some of our products ...</h3>
        </Row>
        <Row>
          {latestProducts.map((product, idx) => (
            <ItemPanel key={idx} product={ product } />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home
