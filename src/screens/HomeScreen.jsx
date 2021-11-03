import React, { useEffect } from 'react'
// import AllPizza from '../pizza-data';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PizzaCard from '../components/PizzaCard';
import { getAllPizzas } from '../actions/PizzaAction';

const HomeScreen = () => {

  const dispatch = useDispatch();

  const pizzaState = useSelector((state) => state.getAllPizzaReducer);

  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch])

  return (
    <>
      <Container>
        {
          (loading)
            ? (<h1>Loading ... </h1>)
            : error
              ? (<h1>Something went wrong while fetching...</h1>)
              : (
                <Row>
                  {
                    pizzas.map((pizzaKey) => (
                      <Col md={4}>
                        <PizzaCard pizza={pizzaKey} key={pizzaKey} />
                      </Col>
                    ))
                  }
                </Row>
              )
        }

      </Container>
    </>
  )
}

export default HomeScreen
