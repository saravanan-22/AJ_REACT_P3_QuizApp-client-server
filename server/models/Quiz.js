import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    questionType: {
      type: String,
    },
    question: {
      type: String,
    },
    correct_answer: {
      type: String,
    },
    // Use an array for incorrect_answers
    incorrect_answers: [{
      type: String,
    }],
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
