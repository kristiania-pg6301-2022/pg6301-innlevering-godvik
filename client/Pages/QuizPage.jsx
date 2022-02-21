import React from "react";
import { useLoader } from "../utils/hooks/useLoader";
import { fetchJSON } from "../utils/http";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export function QuizPage({ setScore, setAnsweredQuestions }) {
  const { loading, error, data, reload } = useLoader(
    async () => await fetchJSON("/api/question")
  );
  const navigate = useNavigate();
  const question = data;

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return (
      <div style={{ border: "1px solid red", background: "Pink" }}>
        An error occurred: {error.toString()}
      </div>
    );
  }

  function quizHandler(answer) {
    const { id } = question;
    fetch(`/api/question/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ answer, id }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          setScore((score) => score + 1);
          setAnsweredQuestions((answeredQuestions) => answeredQuestions + 1);
          navigate("/answers/correct");
        } else {
          navigate("/answers/wrong");
          setAnsweredQuestions((answeredQuestions) => answeredQuestions + 1);
        }
      });
  }

  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((answer) => (
          <div key={answer}>
            <button onClick={() => quizHandler(answer)}>
              {question.answers[answer]}
            </button>
          </div>
        ))}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
