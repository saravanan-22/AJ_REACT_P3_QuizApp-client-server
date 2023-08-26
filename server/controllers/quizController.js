import Quiz from "../models/Quiz.js";

// postGKQuiz-----------------------------------------------------------------
export const postAllGkQuestions = (req, res) => {
  const newQuiz = new Quiz(req.body)
    .save()
    .then((gk) =>
      res.status(201).json({
        success: true,
        message: "Posted GK questions successfully",
        data: gk,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//getGkQuiz-------------------------------------------------------------------
export const getAllQuestions = (req, res) => {
  Quiz.find()
    .then((quiz)=> res.status(200).json({success :true , message : "user get successfully", data : quiz}))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
