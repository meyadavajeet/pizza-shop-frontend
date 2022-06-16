import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container style={{marginTop:'20px'}}>
        <Row>
          <Col md={6}>
            <h1>Contact us on</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              minima, repudiandae molestias laudantium ratione quasi, dolor
              corrupti non adipisci iusto velit ullam vel maxime, magnam eaque
              accusamus corporis aspernatur commodi.
            </p>
            <Table striped bordered hover size="sm" st className="text-center">
              <thead>
                <tr>
                  <th colSpan="4" className="bg-warning">--- Contact Details ---- </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src="images/pizza1.jpg"  style={{width:'100%', height:'500px'}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
