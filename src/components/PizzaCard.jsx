import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';

const PizzaCard = ({ pizza }) => {

  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState('1');

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style = {{padding:'5px'}}>
        <Card style={{ width: '18rem', marginTop: '5px', }} >
          <Card.Img variant="top"
            src={pizza.image}
            style={{ height: '180px', width: '100%', cursor: 'pointer' }}
            onClick={handleShow}
          />
          <Card.Body>
            <Card.Title className="text-center">{pizza.name}</Card.Title>
            <hr />
            <Card.Text>
              <Row>
                <Col>
                  <h6>Varients</h6>
                  <select onChange={e => { setVarient(e.target.value) }}>
                    {
                      pizza.varients.map((variant) => (
                        <option value={variant}  > {variant}</option>
                      ))
                    }
                  </select>
                </Col>
                <Col>
                  <h6>Quantity</h6>
                  <select onChange={e => { setQuantity(e.target.value) }}>
                    {[...Array(10).keys()].map((v, quantity) => (
                      <option value={quantity + 1}>{quantity + 1}</option>
                    ))}
                  </select>
                </Col>
              </Row>
            </Card.Text>
            <Row>
              <Col md={6}>
                Price : Rs {pizza.prices[0][varient] * quantity}/-
              </Col>
              <Col md={6}>
                <Button className="btn btn-warning btn-sm">Add To Cart</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img variant="top"
              src={pizza.image}
              style={{ height: '180px', width: '100%' }}
            />
          </div>
          <div>
            <h5>Description:</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PizzaCard
