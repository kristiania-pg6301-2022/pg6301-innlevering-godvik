import { Link } from "react-router-dom";
import React from "react";

export function FrontPage({ score, answeredQuestions }) {
  return (
    <div>
      <h1>Welcome to the QUIZ!!!</h1>
      <div>
        You have answered {score} of {answeredQuestions} correctly
      </div>
      <Link to={"/quiz"}>Take a quiz</Link>
    </div>
  );
}
