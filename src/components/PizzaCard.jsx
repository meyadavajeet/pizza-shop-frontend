import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const PizzaCard = ({ pizza }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza.image} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <h6>Varients</h6>
              </Col>
              <Col>
                <h6>Quantity</h6>
              </Col>
            </Row>
          </Card.Text>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default PizzaCard
