import express from "express";
const router = express.Router();
import {createUser, getAllUsers, updateCurrentPoints,getSingleUserCurrentPoints} from "../controllers/userControllers.js"



// CreateUser -POST http://localhost:5000/api/v1/user/create
router.post("/create", createUser);

// GET- all users http://localhost:5000/api/v1/users
router.get("/", getAllUsers)

//GET - single user http://localhost:5000/api/v1/user/getCorrentPoints/:id
router.get('/getCurrentPoints/:id', getSingleUserCurrentPoints)

// PUT - update Points http://localhost:5000/api/v1/users/updateCurrentPoints/:id
router.put("/updateCurrentPoints/:id",updateCurrentPoints)
export default router;