import express from "express";
import { getRandomQuestion } from "../controllers/QuestionController.js";

export const QuizApp = express.Router();

QuizApp.route("/question").get(getRandomQuestion);
