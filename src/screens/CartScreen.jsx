import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const CartScreen = () => {
   return (
      <>
         <Container>
            <Row>
               <Col md={6}>
                  <h1>Cart Items</h1>
               </Col>
               <Col md={4}>
                  <h2>Payment Details</h2>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default CartScreen;