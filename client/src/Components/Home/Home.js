import React from "react";
import Header from "../Header/Header";
import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gk from "../images/gk.png";
import vehicles from "../images/vehicle.png";
import politics from "../images/politics.png";
import sports from "../images/sports.png";
import history from "../images/history.png";
import animals from "../images/animals.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (  
    <div>
      <Header />
      <section style={{marginTop: "5em", marginBottom : "2em" }} className="cards">
      <h4 style={{marginBottom : "2rem", textDecoration : "underline"}}>"Would you like to start the game? Click on the image."</h4>
        <Container>
          <Row className="mb-3">
            {/*-------------------------------------CARD-1----------------------------------------------------------------- */}
            <Col md={4}>
              <Link to="/Gk" style={{ textDecoration: "none" }}>
                <Card>
                  <Card.Img variant="top" src={gk} className="aspect-ratio" />
                  <Card.Body>
                    <Card.Title>GK Quiz</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            {/*-------------------------------------CARD-2----------------------------------------------------------------- */}
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={vehicles} />
                <Card.Body>
                  <Card.Title>vehicles</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            {/*-------------------------------------CARD-3----------------------------------------------------------------- */}
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={politics}
                  className="aspect-ratio"
                />
                <Card.Body>
                  <Card.Title>politics</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/*-------------------------------------CARD-4----------------------------------------------------------------- */}
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={sports} className="aspect-ratio" />
                <Card.Body>
                  <Card.Title>sports</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            {/*-------------------------------------CARD-5----------------------------------------------------------------- */}
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={history}
                  className="aspect-ratio"
                />
                <Card.Body>
                  <Card.Title>history</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            {/*-------------------------------------CARD-6----------------------------------------------------------------- */}
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={animals}
                  className="aspect-ratio"
                />
                <Card.Body>
                  <Card.Title>animals</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
