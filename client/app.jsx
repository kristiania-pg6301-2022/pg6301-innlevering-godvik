import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./Pages/FrontPage";
import { QuizPage } from "./Pages/QuizPage";
import React, { useState } from "react";

export function App() {
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <FrontPage score={score} answeredQuestions={answeredQuestions} />
        }
      />
      <Route
        path={"/quiz"}
        element={
          <QuizPage
            setScore={setScore}
            setAnsweredQuestions={setAnsweredQuestions}
          />
        }
      />
      <Route path={"/*"} element={<h1>Page does not exist</h1>} />
    </Routes>
  );
}
