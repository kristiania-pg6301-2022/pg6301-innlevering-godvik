import React from "react";
import { useLoader } from "../utils/hooks/useLoader";
import { fetchJSON, requestJSON } from "../utils/http";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export function QuizPage() {
  const {
    loading,
    error,
    data: question,
    reload,
  } = useLoader(async () => await fetchJSON("/api/question"));
  const navigate = useNavigate();

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

  async function quizHandler(answer) {
    const res = await requestJSON(
      `/api/question/${question?.id}`,
      { answer },
      "POST"
    );
    if (res.result === "correct") {
      navigate("/answers/correct");
    } else navigate("/answers/wrong");
  }

  return (
    <div>
      <h1>{question?.question}</h1>
      {Object.keys(question?.answers)
        .filter((a) => question?.answers[a])
        .map((answer) => (
          <div key={answer}>
            <button onClick={() => quizHandler(answer)}>
              {question?.answers[answer]}
            </button>
          </div>
        ))}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
