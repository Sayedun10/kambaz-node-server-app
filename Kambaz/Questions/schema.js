import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, default: "New Question" },
    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
      default: "Multiple Choice",
    },
    points: { type: Number, default: 1 },
    question: { type: String, default: "" },
    choices: [String],
    correctAnswer: String,
    quiz: { type: String, ref: "QuizModel" },
  },
  { collection: "questions" }
);

export default questionSchema;
