import express from "express";
import {
  getRandomQuestion,
  getAnswer,
} from "../controllers/QuestionController.js";

export const QuizApp = express.Router();

QuizApp.route("/question").get(getRandomQuestion);
QuizApp.route("/question/:id").post(getAnswer);
