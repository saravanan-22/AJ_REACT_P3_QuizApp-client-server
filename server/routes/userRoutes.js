import express from "express";
const router = express.Router();
import {
  createUser,
  getAllUsers,
  updateCurrentPoints,
  getSingleUserCurrentPoints,
  updatePrePoints,
  updateTotalPoints,
  getPreviousPoints,
  getTotalPoints,
  updateUserData,
  updatePassword,
} from "../controllers/userControllers.js";

// CreateUser -POST http://localhost:5000/api/v1/user/create
router.post("/create", createUser);

// GET- all users http://localhost:5000/api/v1/users
router.get("/", getAllUsers);

//GET - single user http://localhost:5000/api/v1/user/getCorrentPoints/:id
router.get("/getCurrentPoints/:id", getSingleUserCurrentPoints);

// PUT - update Points http://localhost:5000/api/v1/users/updateCurrentPoints/:id
router.put("/updateCurrentPoints/:id", updateCurrentPoints);

//PUT - update PreviousPoints http://localhost:5000/api/v1/users/updateGkQuestions/previousPoints
router.put("/updateGkQuestions/previousPoints/:id", updatePrePoints);

//PUT - update totalPoints http://localhost:5000/api/v1/users/updateGKQuestions/totalPoints
router.put("/updateGKQuestions/totalPoints/:id", updateTotalPoints);

//GET - http://localhost:5000/api/v1/users/getGkQuestions/previousPoints/:id
router.get("/getGkQuestions/previousPoints/:id", getPreviousPoints);

//GET - http://localhost:5000/api/v1/users/getGkQuestions/totalPoints/:id
router.get("/getGkQuestions/totalPoints/:id", getTotalPoints);

//PUT - http://localhost:5000/api/v1/users/editedUserData/:id
router.put("/editedUserData/singleUser/:id", updateUserData);

//PATCH -http://localhost:5000/api/v1/users/forgotPassword/:id
router.patch("/forgotPassword/:id", updatePassword);

export default router;
