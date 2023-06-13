import React from 'react'
import VideoComponent from '../component/template/VideoComponent';
import Link from "../data/VideoLink.json"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Vedio = () => {

  return (
    <>
      <Container>
        <Row>
          {Link.map((data, key) => {
            return (
              <Col>
                <Card key={key} style={{ width: '25rem' }} className="mb-8">
                  <Card.Body>
                    <Card>
                      <VideoComponent 
                        link = {data.link}
                      />
                    </Card>
                    <Card.Title>
                      <div className = "text-2xl">
                        {data.title}
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>)
          })}
        </Row>
      </Container>
    </>
  )
}

export default Vedio


