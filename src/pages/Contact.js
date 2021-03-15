import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const Contact = () => {
  return (
    <Container>
      <Row>
      <div className="e-wrapper__heading">
        <h3>Get in touch ...</h3>
        <hr />
      </div>
        <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. </p>
        <p>Nulla porttitor accumsan tincidunt.</p>
      </Row>
      <Row>
        <Col xs={8} className="mr-auto ml-auto">
          <Form.Group>
                        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Your name" />

            <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" type="email" placeholder="contact@where.you.are.com" />
            <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={8} />
        <Button type="submit" className="e-button">Submit</Button>
      </Form.Group>

        </Col>
                        </Row>

    </Container>
  )
}

export default Contact