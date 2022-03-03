import express from "express";
import {
  getRandomQuestion,
  getAnswer,
  getScore,
} from "../controllers/QuestionController.js";

export const QuizApp = express.Router();

QuizApp.route("/question").get(getRandomQuestion);
QuizApp.route("/question/:id").post(getAnswer);
QuizApp.route("/score").get(getScore);
