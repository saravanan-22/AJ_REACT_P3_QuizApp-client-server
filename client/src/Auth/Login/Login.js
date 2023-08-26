import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import image from "./images/logo.svg.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // submitBtn-----------------------------------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        const fetchedUsers = res.data;
        const { data } = fetchedUsers;
        data.find((user) => {
          if (user.email === email && user.password === password) {
            alert("login successful");
            navigate("/");
          } else {
            setLoginError("email or password doesn't match");
          }
        });
      })
      .catch((err) => {
        console.error(err);
        setLoginError("An error occurred during login");
      });
  };

  return (
    <div>
      <Card
        style={{
          width: "21rem",
          margin: "0 auto",
          padding: "1em",
          marginTop: "4.5em",
        }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Log in</Card.Title>
        </Card.Body>
        <>
          <Form onSubmit={handleSubmit} className="d-grid">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                style={{ textAlign: "start" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                style={{ textAlign: "start" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
            <p className="text-danger">{loginError}</p>
            <Link to="/ResetPassword" className="text-end">
              ResetPassword
            </Link>
            <Button type="submit">Submit</Button>
          </Form>
        </>
        <Card.Body>
          <h6>
            user credentials! <Link to="/">login</Link>
          </h6>
          <h6>
            Don't have an account? <Link to="/SignUp">Sign up</Link>
          </h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;