import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import image from "../Login/images/logo.svg.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./singUp.css";
import { useState } from "react";
import axios from "axios";
import background from "../../images/login_background.jpg"

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [error, setError] = useState();

  const navigate = useNavigate();

  // submitBtn-----------------------------------------------------------------------------------------------------
  const handleCreate = (e) => {
    e.preventDefault();
    const ageAsString = age.toString();
    const phoneNumberAsString = phoneNumber.toString();

    axios
      .post("http://localhost:5000/api/v1/users/create", {
        username: userName,
        email: email,
        password: password.toString(),
        ph: phoneNumberAsString,
        age: ageAsString,
      })
      .then(() => {
        alert("user created successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
      }}
    >
      <Card
        style={{
          width: "22rem",
          margin: "0 auto",
          padding: "0 1em",
          paddingTop : "0.5em",
          marginTop: "1em",
          backgroundColor : "rgb(241, 241, 241)"
        }}
      >
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>Register Your Account</Card.Title>
        </Card.Body>
        <>
          <Form className="d-grid" onSubmit={handleCreate}>
            <FloatingLabel label="username" className="mb-2">
              <Form.Control
                type="text"
                placeholder="username"
                value={userName}
                required
                onChange={(e) => setUserName(e.target.value)}
                style={{ textAlign: "start" }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{ textAlign: "start" }}
              />
            </FloatingLabel>
            <FloatingLabel label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-2"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ textAlign: "start" }}
              />
            </FloatingLabel>
            <FloatingLabel label="age">
              <Form.Control
                type="number"
                placeholder="age"
                required
                className="mb-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{ textAlign: "start" }}
              />
            </FloatingLabel>
            <FloatingLabel label="mobile number">
              <Form.Control
                type="tel"
                placeholder="phoneNumber"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ textAlign: "start" }}
              />
            </FloatingLabel>
            <Button type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </>
        <Card.Body>
          <h6>
            Have an account? <Link to="/">Login</Link>
          </h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
