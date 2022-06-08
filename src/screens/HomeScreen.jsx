import React, { useEffect } from 'react'
// import AllPizza from '../pizza-data';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PizzaCard from '../components/PizzaCard';
import { getAllPizzas } from '../actions/PizzaAction';
import Loader from "react-js-loader";

const HomeScreen = () => {

	// useDispatch -> used to send request from frontend to the server
	// useSelector -> used to get request response from the redux state
	// useEffect -> get products at runtime like componentDidMount in class component

	const dispatch = useDispatch();

	const pizzaState = useSelector((state) => state.getAllPizzaReducer);
	//destructing the state object
	const { loading, pizzas, error } = pizzaState;

	useEffect(() => { dispatch(getAllPizzas()) }, [dispatch])

	return (
		<>
			<Container>
				{
					(loading)
						? (
							<div className="{Item}" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
								<Loader type="box-rectangular" bgColor={"yellow"} size={100} />
							</div>
						)
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
