import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import MainCarousel from '../components/MainCarousel'
import ItemPanel from '../components/ItemPanel'
import { BiMessageDots } from "react-icons/bi";

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
      <div className="e-wrapper e-lite-green">
        <Container>
          <BiMessageDots className="home-blurb__icon"/>
          <p className="home-blurb__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          <p className="home-blurb__txt">Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        </Container>
      </div>
      <div className="e-wrapper e-white">
        <Container className="home-products">
          <Row>
            <div className="e-wrapper__heading">
              <h3>Some of our products ...</h3>
              <hr />
            </div>
          </Row>
          <Row>
            {latestProducts.map((product, idx) => (
              <ItemPanel key={idx} product={ product } />
            ))}
          </Row>
          </Container>
        </div>
    </div>
  )
}

export default Home
