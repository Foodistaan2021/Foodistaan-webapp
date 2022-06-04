import React from 'react';
import deal from '../images/Deal.png';
import vector from '../images/Vector.png';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function Deals() {
  return (
    <div>
      <Container fluid className="deal-container">
        <h2 className="big-font">Deals Of The Day</h2>
        <Row className="deal-container">
          <Col md={4} xs={6} className="search">
            <div
              className="deal-img"
              style={{ background: `url(${deal})center center` }}
            >
              <div
                className="deal-img-discount "
                style={{
                  background: `url(${vector})no-repeat center center`,
                  'background-size': 'cover',
                }}
              >
                <strong> 30% off</strong>
              </div>
            </div>
          </Col>

          <Col md={4} xs={6} className="search">
            <div
              className="deal-img"
              style={{ background: `url(${deal}) center center` }}
            >
              <div
                className="deal-img-discount"
                style={{
                  background: `url(${vector})no-repeat center center`,
                  'background-size': 'cover',
                }}
              >
                <strong> 30% off</strong>
              </div>
            </div>
          </Col>

          <Col md={4} xs={6} className="hide search">
            <div
              className="deal-img"
              style={{ background: `url(${deal}) center center` }}
            >
              <div
                className="deal-img-discount"
                style={{
                  background: `url(${vector})no-repeat center center`,
                  'background-size': 'cover',
                }}
              >
                <strong> 30% off</strong>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={9}></Col>
          <Col sm={2} className="search">
            {' '}
            <Button variant="outline-warning" className="viewMore-btn md-font">
              View More...
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
