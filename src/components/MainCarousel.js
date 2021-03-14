import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImage1 from '../assets/images/conscious.jpeg'
import CarouselImage2 from '../assets/images/pots.jpeg'
import CarouselImage3 from '../assets/images/maxBender.jpeg'

const MainCarousel = () => {
  return (
    <Carousel className="main-carousel" fade controls={ false }>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ CarouselImage1}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_text">
          <h3>Carousel Slide 1 title</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ CarouselImage2 }
          alt="Second slide"
        />

        <Carousel.Caption className="carousel_text">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ CarouselImage3 }
          alt="Third slide"
        />

        <Carousel.Caption className="carousel_text">
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MainCarousel
