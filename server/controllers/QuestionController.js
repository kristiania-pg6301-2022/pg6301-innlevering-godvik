import { randomQuestion } from "../questions.js";

export const getRandomQuestion = (req, res) => {
  const { id, category, question, answers } = randomQuestion();
  res.json({
    id,
    category,
    question,
    answers,
  });
};
