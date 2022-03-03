import { randomQuestion, Questions, isCorrectAnswer } from "../questions.js";

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
  const id = parseInt(req.params.id);
  const { answer } = req.body;
  const score = req.signedCookies.score
    ? JSON.parse(req.signedCookies.score)
    : {
        answered: 0,
        correct: 0,
      };
  const question = Questions.find((q) => q.id === id);
  if (!question) {
    return res.status(404).json({
      msg: "Question not found",
    });
  }
  score.answered += 1;
  if (isCorrectAnswer(question, answer)) {
    score.correct += 1;
    res.cookie("score", JSON.stringify(score), { signed: true });
    return res.json({
      result: "correct",
    });
  } else {
    res.cookie("score", JSON.stringify(score), { signed: true });
    return res.json({
      result: "wrong",
    });
  }
};

// Store score in cookies
export const getScore = (req, res) => {
  const score = req.signedCookies.score
    ? JSON.parse(req.signedCookies.score)
    : {
        answered: 0,
        correct: 0,
      };
  res.json(score);
};
