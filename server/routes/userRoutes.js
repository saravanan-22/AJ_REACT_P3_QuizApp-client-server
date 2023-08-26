import express from "express";
const router = express.Router();
import {createUser, getAllUsers} from "../controllers/userControllers.js"



// CreateUser -POST http://localhost:5000/api/v1/user/create
router.post("/create", createUser);

// GET- all users http://localhost:5000/api/v1/users
router.get("/", getAllUsers)

export default router;