import React, { useEffect, useContext, useReducer } from "react";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./GK.css";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CartContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const gkReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_SELECTED_ANSWER":
      return { ...state, selectedAnswer: action.payload };
    case "SET_CURRENT_QUESTION_INDEX":
      return { ...state, currentQuestionIndex: action.payload };
    case "DECREASE_TIMER":
      return { ...state, timeRemaining: state.timeRemaining - 1 };
    case "SET_POINTS":
      return { ...state, points: action.payload };
    default:
      return state;
  }
};

const initialState = {
  questions: [],
  selectedAnswer: [],
  currentQuestionIndex: 0,
  timeRemaining: 120,
  points: 0,
  answeredCorrectly: [], // Initialize an empty array
};

const Gk = () => {
  const [state, dispatch] = useReducer(gkReducer, initialState);
  const { Gk } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_QUESTIONS", payload: Gk });
  }, [Gk]);

  // Function to handle next question
  const handleNextQuestion = () => {
    // Check if there are more questions
    if (state.currentQuestionIndex < state.questions.length - 1) {
      // Move to the next question
      dispatch({
        type: "SET_CURRENT_QUESTION_INDEX",
        payload: state.currentQuestionIndex + 1,
      });
    } else {
      navigate("/quiz-completed"); // Navigate to a quiz completion page
    }
    const userId = localStorage.getItem("uid");
    axios
      .put(`http://localhost:5000/api/v1/users/updateCurrentPoints/${userId}`, {
        currentPoints: state.points,
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePreviousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      dispatch({
        type: "SET_CURRENT_QUESTION_INDEX",
        payload: state.currentQuestionIndex - 1,
      });
    }
  };

  // useEffect to start and update the timer
  useEffect(() => {
    let timer;
    const updateTimer = () => {
      if (state.timeRemaining > 0) {
        timer = setTimeout(() => {
          dispatch({ type: "DECREASE_TIMER" });
        }, 1000); // Decrease timeRemaining every second (1000 milliseconds)
      } else {
        // Timer has completed, redirect to home
        navigate("/");
      }
    };

    updateTimer();

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, [state.timeRemaining]);

  // Function to format time as minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Function to handle selecting an answer
  const handleSelectAnswer = (answer) => {
    const currentQuestion = state.questions[state.currentQuestionIndex];

    if (currentQuestion) {
      if (answer === currentQuestion.correct_answer) {
        // Check if the question has not been answered correctly before
        if (!state.answeredCorrectly[state.currentQuestionIndex]) {
          // Increment points if the answer is correct
          dispatch({ type: "SET_POINTS", payload: state.points + 1 });

          // Set the flag to true to indicate that this question has been answered correctly
          const updatedAnsweredCorrectly = [...state.answeredCorrectly];
          updatedAnsweredCorrectly[state.currentQuestionIndex] = true;

          dispatch({
            type: "SET_ANSWERED_CORRECTLY",
            payload: updatedAnsweredCorrectly,
          });
        }
      }
    }

    // Create a new array with the selected answer for the current question
    const updatedSelectedAnswer = [...state.selectedAnswer];
    updatedSelectedAnswer[state.currentQuestionIndex] = answer;

    dispatch({
      type: "SET_SELECTED_ANSWER",
      payload: updatedSelectedAnswer,
    });
  };

  return (
    <div>
      <Header />
      <section style={{ marginTop: "6em" }}>
        <h5 style={{ textAlign: "end", margin: "0", marginRight: "52px" }}>
          Timer : {formatTime(state.timeRemaining)}
        </h5>
        {state.questions.map((gkQuestion, index) => (
          <div
            key={index}
            style={{
              display: index === state.currentQuestionIndex ? "block" : "none",
            }}
          >
            <Card className="text-center mx-5 mb-2 transparent-card">
              <Card.Header>{gkQuestion.category}</Card.Header>
              <Card.Body>
                <Card.Title className="mb-3">
                  QUESTION : {gkQuestion.question}
                </Card.Title>
                <Row className="mb-2">
                  <Col md={6}>
                    <Button
                      onClick={() =>
                        handleSelectAnswer(gkQuestion.correct_answer)
                      }
                      variant={
                        state.selectedAnswer[state.currentQuestionIndex] ===
                        gkQuestion.correct_answer
                          ? "outline-success"
                          : "outline-dark"
                      }
                      disabled={
                        state.selectedAnswer[state.currentQuestionIndex] !==
                        undefined
                      }
                    >
                      A . {gkQuestion.correct_answer}
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      onClick={() =>
                        handleSelectAnswer(gkQuestion.incorrect_answers[0])
                      }
                      variant={
                        state.selectedAnswer[state.currentQuestionIndex] ===
                        gkQuestion.incorrect_answers[0]
                          ? "outline-danger"
                          : "outline-dark"
                      }
                      disabled={
                        state.selectedAnswer[state.currentQuestionIndex] !==
                        undefined
                      }
                    >
                      B . {gkQuestion.incorrect_answers[0]}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Button
                      onClick={() =>
                        handleSelectAnswer(gkQuestion.incorrect_answers[1])
                      }
                      variant={
                        state.selectedAnswer[state.currentQuestionIndex] ===
                        gkQuestion.incorrect_answers[1]
                          ? "outline-danger"
                          : "outline-dark"
                      }
                      disabled={
                        state.selectedAnswer[state.currentQuestionIndex] !==
                        undefined
                      }
                    >
                      C . {gkQuestion.incorrect_answers[1]}
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      onClick={() =>
                        handleSelectAnswer(gkQuestion.incorrect_answers[2])
                      }
                      variant={
                        state.selectedAnswer[state.currentQuestionIndex] ===
                        gkQuestion.incorrect_answers[2]
                          ? "outline-danger"
                          : "outline-dark"
                      }
                      disabled={
                        state.selectedAnswer[state.currentQuestionIndex] !==
                        undefined
                      }
                    >
                      D . {gkQuestion.incorrect_answers[2]}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-muted">
                {gkQuestion.questionType}
              </Card.Footer>
            </Card>
          </div>
        ))}
        <div className="text-center">
          {state.currentQuestionIndex > 0 && (
            <Button
              onClick={handlePreviousQuestion}
              variant="primary"
              className="me-2"
            >
              Previous Question
            </Button>
          )}
          {state.currentQuestionIndex < state.questions.length - 1 && (
            <Button onClick={handleNextQuestion} variant="primary">
              Next Question
            </Button>
          )}
        </div>
        <h6 className="text-start ms-5">POINTS : {state.points}</h6>
        <h6 className="text-start ms-5">
          Selected Answer :{" "}
          {state.selectedAnswer[state.currentQuestionIndex] || "Not Selected"}
        </h6>
        <h6 className="text-start ms-5">
           Questions No : {state.currentQuestionIndex}
        </h6>
      </section>
    </div>
  );
};

export default Gk;
