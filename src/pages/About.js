import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../assets/images/conscious.jpeg'
import { BiLeftArrowAlt } from "react-icons/bi";

const About = () => {
  return (
    <>
    <div className="e-wrapper e-lite-green about-top">
      <Container>
        <div className="e-wrapper__heading">
          <h3>About the project</h3>
          <hr />
        </div>
        <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        <p>Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
        </Container>
    </div>
      <div className="e-wrapper e-beige">
        <div className="about-image-wrapper">
          <img src={image} />
        </div>
        <Container className="about-txt">
          <Row>
            <Col xs={4} className="col-txt">
              <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</p>
              <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat.</p>
            </Col>
            <Col xs={4} className="col-txt">
              <p>Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
              <p>Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit.</p>
              <ul>
                <li><BiLeftArrowAlt className="col-txt__icon"/>Pellentesque in ipsum id orci porta dapibus.</li>
                <li><BiLeftArrowAlt className="col-txt__icon" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li><BiLeftArrowAlt className="col-txt__icon" />Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</li>
              </ul>
            </Col>
            <Col xs={4} className="col-txt">
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta.</p>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
