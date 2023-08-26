import React, { useEffect, useState, useRef } from "react";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./GK.css";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gk = () => {
  const [gkQuestions, setGkQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Fetch data from the API inside the useEffect hook
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/gkQuestions")
      .then((res) => {
        const fetchedQuestions = res.data;
        const { data } = fetchedQuestions;
        setGkQuestions(data);
      })
      .catch((err) => console.log(err.message));
  }, []);


  // Function to handle next question
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Function to handle previous question
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      <Header />
      <section style={{ marginTop: "6em" }}>
        {gkQuestions.map((gkQuestion, index) => (
            <div key={index} style={{ display: index === currentQuestionIndex ? "block" : "none" }}>
              <Card className="text-center mx-5 mb-2 transparent-card">
                <Card.Header>{gkQuestion.category}</Card.Header>
                <Card.Body>
                  <Card.Title className="mb-3">QUESTION  :  {gkQuestion.question}</Card.Title>
                  <Row className="mb-2">
                    <Col md={6}>
                      {" "}
                      <Button variant="outline-dark">
                        A . {gkQuestion.correct_answer}
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button variant="outline-dark">
                        B . {gkQuestion.incorrect_answers[0]}
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Button variant="outline-dark">
                        C . {gkQuestion.incorrect_answers[1]}
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button variant="outline-dark">
                        D . {gkQuestion.incorrect_answers[2]}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-muted">{gkQuestion.questionType}</Card.Footer>
              </Card>
            </div>
          ))}
        <div className="text-center">
          {currentQuestionIndex > 0 && (
            <Button onClick={handlePreviousQuestion} variant="primary" className="me-2">
              Previous Question
            </Button>
          )}
          {currentQuestionIndex < gkQuestions.length - 1 && (
            <Button onClick={handleNextQuestion} variant="primary">
              Next Question
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gk;
