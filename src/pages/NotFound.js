import React from 'react'
import image from '../assets/images/help.jpeg'
import { Container, Row, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  let history = useHistory();
  return (
    <>
    <div className="e-wrapper e-dark-green not-found-top">
        <div className="e-wrapper__heading">
          <h3>Sorry! Wrong page</h3>
          <hr />
      </div>
        <Container>
          <Row>
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center"}}>
            <Col xs={ 2 }>
              <Button onClick={() => history.goBack()} className="e-button" >Back to safety</Button>
            </Col>
            <Col xs={ 2}>
              <Button href="/" className="e-button">Home</Button>
            </Col>
          </Row>
      </Container>
      </div>
      <div className="e-wrapper e-beige">
        <Container>
        <div className="notfound-image-wrapper">
          <img src={ image } alt="Wrong way go back " />
          </div>
          </Container>
      </div>
    </>
  )
}

export default NotFound
