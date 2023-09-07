import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../images/profile_background.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ProfilePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center the form vertically
      }}
    >
      <section>
        <Form style={{ width: '60vw' }}>
          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group controlId="formUsername">
                <Form.Label style={{ color: 'white' }}>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group controlId="formAge">
                <Form.Label style={{ color: 'white' }}>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formGender">
                <Form.Label style={{ color: 'white' }}>Gender</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group controlId="formPassword">
                <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label style={{ color: 'white' }}>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>
            </Col>
          </Row>
          <Link to="/">
        <Button variant="outline-light">
          <FaArrowRight />
          <span> Log Out</span>
        </Button>
      </Link>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default ProfilePage;
