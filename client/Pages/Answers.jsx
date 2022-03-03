import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import { useLoader } from "../utils/hooks/useLoader";
import { fetchJSON } from "../utils/http";

export function Answers() {
  const {
    data: score,
    loading,
    reload,
  } = useLoader(async () => fetchJSON("/api/score"));
  return (
    <div>
      <Routes>
        <Route path="wrong" element={<h1>WRONG ANSWER</h1>} />
        <Route path="correct" element={<h1>CORRECT ANSWER</h1>} />
      </Routes>
      {score && (
        <div>
          <h1>
            Score: {score.correct} of {score.answered}
          </h1>
        </div>
      )}
      <button>
        <Link to="/quiz">New question</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
