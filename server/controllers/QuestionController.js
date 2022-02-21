import { randomQuestion, Questions, isCorrectAnswer } from "../questions.js";
import { request } from "express";

export const getRandomQuestion = (req, res) => {
  const { id, category, question, answers } = randomQuestion();
  res.json({
    id,
    category,
    question,
    answers,
  });
};

export const getAnswer = (req, res) => {
  const { id, answer } = req.body;
  const question = Questions.find((q) => q.id === id);
  if (!question) {
    return res.status(404).json({
      msg: "Question not found",
    });
  }
  const correct = isCorrectAnswer(question, answer);
  res.status(200).json({ result: correct });
};
