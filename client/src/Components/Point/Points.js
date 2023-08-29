import React, { useContext, useEffect, useState } from "react";
import "./Points.css";
import Header from "../Header/Header";
import { CartContext } from "../Context/Context";

const Points = () => {
  const [currPoints, setCurrPoints] = useState();
  const { currentPoints } = useContext(CartContext);


  useEffect(() => {
    setCurrPoints(currentPoints);
  }, [currentPoints]);

  return (
    <div>
      <Header />
      <h1 className="text-center" style={{ marginTop: "2em" }}>
        Points Table
      </h1>
      <table className="points-table">
        <thead>
          <tr className="text-white">
            <th>NO.</th>
            <th>Category</th>
            <th>Previous Points</th>
            <th>Current Points</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>GK</td>
            <td>{}</td>
            <td>{currPoints}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vehicles</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Politics</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Sports</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>History</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Animals</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Points;
