import express from "express";
import { postAllGkQuestions , getAllQuestions} from "../controllers/quizController.js";
const router = express.Router();

// POST-allGkQuestion -http://localhost:5000/api/v1/gkQuestions/create
router.post("/create", postAllGkQuestions);


// GET - allGKQuestion -http://localhost:5000/api/v1/gkQuestions
router.get("/", getAllQuestions)



export default router;