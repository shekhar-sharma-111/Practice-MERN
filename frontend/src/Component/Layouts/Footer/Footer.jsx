import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div>
 <footer className="py-5 bg-light">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5 className="text-uppercase fw-bold mb-4">
              Company Name
            </h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="text-uppercase fw-bold mb-4">
              Products
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Angular
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  React
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Vue
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Laravel
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="text-uppercase fw-bold mb-4">Useful links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Settings
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Orders
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-dark">
                  Help
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>
              © 2022 Copyright. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
      
    </div>
  )
}

export default Footer