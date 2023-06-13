import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyModel = () => {
  return (
    
    <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm">

        {/* <Container className="flex justify-content-center align-content-center justify-items-center align-items-center"> */}
        <Container className="flex align-items-center justify-content-center">
          <Row>
            <Col sm={2}>
              <Spinner animation="border" />
            </Col>
            <Col sm={10}>
              <h2>Loading ...</h2>
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default MyModel
