import React, { createContext, useContext, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export const CartContext = createContext();

export const Context = ({ children }) => {
  const [Gk, setGk] = useState([]);
  const [currentPoints, setCurrentPoints] = useState([]);
  const [userId, setUserId] = useState();
  const [prevPoints, setPrevPoints] = useState([]);
  const [totalPoints, setTotalPoints] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/gkQuestions")
      .then((res) => {
        const fetchedQuestions = res.data;
        const { data } = fetchedQuestions;
        setGk(data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false); // Set loading to false in case of an error
      });

    //----------------------------------------------------------------------------------------------------------------
    const userId = localStorage.getItem("uid");
    setUserId(userId)
    axios
      .get(`http://localhost:5000/api/v1/users/getCurrentPoints/${userId}`)
      .then((res) => {
        const fetchedQuestions = res.data;
        const { data } = fetchedQuestions;
        setCurrentPoints(data.currentPoints);
      })
      .catch((err) => {
        console.log(err.message);
      });

    // getPrevious value------------------

    axios
      .get(
        `http://localhost:5000/api/v1/users/getGkQuestions/previousPoints/${userId}`
      )
      .then((res) => {
        const fetchedPrePoints = res.data;
        const { data } = fetchedPrePoints;
        setPrevPoints(data.previousPoint);    
      })
      .catch((err) => console.log(err));

    // getTotalPoints value------------------

    axios
      .get(
        `http://localhost:5000/api/v1/users/getGkQuestions/totalPoints/${userId}`
      )
      .then((res) => {
        const fetchedPrePoints = res.data;
        const { data } = fetchedPrePoints;
        setTotalPoints(data.totalPoints);
      })
      .catch((err) => console.log(err));
  }, []);

  // Render children only if data is available, otherwise show a loading message
  return (
    <CartContext.Provider value={{ Gk, currentPoints, prevPoints, totalPoints }}>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              zIndex: "9999",
            }}
          >
            <Spinner animation="border" variant="secondary" />
            <p className="ms-2 mt-2">Loading...</p>
          </div>
        ) : (
          children
        )}
      </div>
    </CartContext.Provider>
  );
};
