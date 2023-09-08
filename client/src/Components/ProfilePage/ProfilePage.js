import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import image from "../images/profile_background.jpg";
import { CartContext } from "../Context/Context";
import axios from "axios";

const ProfilePage = () => {
  // Define state variables for editing and user details
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");

  // Add state variables for error handling
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const { singleUserDetails } = useContext(CartContext);

  // Function to handle form submission when editing

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/v1/users/editedUserData/singleUser/${userId}`,
        {
          username: editedUsername,
          email: editedEmail,
          password: editedPassword,
          ph: editedPhoneNumber,
        }
      )
      .then((res) => {
        console.log("User details updated successfully");
      })
      .catch((err) => {
        console.error("Error updating user details:", err.response.data);
      });

    setEditing(false);
  };

  useEffect(() => {
    setUserDetails(singleUserDetails);
    const delay = 1000;
    setTimeout(() => {
      setUser(userDetails.username || "");
      setEditedUsername(userDetails.username || "");
      setEditedEmail(userDetails.email || "");
      setEditedPassword(userDetails.password || "");
      setEditedPhoneNumber(userDetails.ph || "");
      setUserId(localStorage.getItem("uid"));
    }, delay);
  }, [singleUserDetails]);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Center the form vertically
      }}
    >
      <Card style={{ width: "25rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>
            <h4 style={{ textAlign: "center" }}>User Details</h4>
          </Card.Title>
          {editing ? (
            <div>
              <Form onSubmit={handleEditSubmit}>
                <Form.Group controlId="editedUsername">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "30%",
                    }}
                  >
                    Username :
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={editedUsername}
                    onChange={(e) => setEditedUsername(e.target.value)}
                    required
                    style={{
                      display: "inline-block",
                      width: "70%",
                      textAlign: "start",
                      marginBottom: "5px",
                    }}
                  />
                  {usernameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.875rem",
                        marginLeft: "32%",
                      }}
                    >
                      Username must be at least 2 characters long.
                    </p>
                  )}
                </Form.Group>

                <Form.Group controlId="editedEmail">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "30%",
                    }}
                  >
                    Email :
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    required
                    style={{
                      display: "inline-block",
                      width: "70%",
                      textAlign: "start",
                      marginBottom: "5px",
                    }}
                  />
                  {emailError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.875rem",
                        marginLeft: "32%",
                      }}
                    >
                      Invalid email format.
                    </p>
                  )}
                </Form.Group>

                <Form.Group controlId="editedPassword">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "30%",
                    }}
                  >
                    Password :
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={editedPassword}
                    onChange={(e) => setEditedPassword(e.target.value)}
                    required
                    style={{
                      display: "inline-block",
                      width: "70%",
                      textAlign: "start",
                      marginBottom: "5px",
                    }}
                  />
                  {passwordError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.875rem",
                        marginLeft: "32%",
                      }}
                    >
                      Password must be at least 6 characters long.
                    </p>
                  )}
                </Form.Group>

                <Form.Group controlId="editedPhoneNumber">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "30%",
                    }}
                  >
                    Ph No :
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={editedPhoneNumber}
                    onChange={(e) => setEditedPhoneNumber(e.target.value)}
                    required
                    style={{
                      display: "inline-block",
                      width: "70%",
                      textAlign: "start",
                    }}
                  />
                  {phoneNumberError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.875rem",
                        marginLeft: "32%",
                      }}
                    >
                      Phone number must be at least 10 digits.
                    </p>
                  )}
                </Form.Group>

                <Button type="submit" variant="success" className="my-2">
                  Save Changes
                </Button>
              </Form>
            </div>
          ) : (
            <div>{/* Display user details here when not in edit mode */}</div>
          )}
          <Button
            variant={editing ? "outline-danger" : "outline-primary"}
            onClick={() => setEditing(!editing)}
          >
            {editing ? "Cancel Edit" : "Edit Profile"}
          </Button>
          <Link to={"/"}>
            <Button variant="outline-danger" className="ms-2">
              Logout
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
