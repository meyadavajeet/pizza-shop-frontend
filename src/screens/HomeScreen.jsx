import React from 'react'
import AllPizza from '../pizza-data';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PizzaCard from '../components/PizzaCard';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {
            AllPizza.map(pizzaKey => (
              <Col md={3}>
                <PizzaCard pizza={pizzaKey} id={pizzaKey.id} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
