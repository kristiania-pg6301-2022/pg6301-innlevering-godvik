import { Link, Route, Routes } from "react-router-dom";
import React from "react";

export function Answers() {
  return (
    <div>
      <Routes>
        <Route path="wrong" element={<h1>WRONG ANSWER</h1>} />
        <Route path="correct" element={<h1>CORRECT ANSWER</h1>} />
      </Routes>
      <button>
        <Link to="/quiz">New question</Link>
      </button>
      <button>
        <Link to="/">Show score</Link>
      </button>
    </div>
  );
}
