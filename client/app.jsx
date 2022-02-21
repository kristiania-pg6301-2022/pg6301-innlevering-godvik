import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./Pages/FrontPage";
import { Quiz } from "./Pages/QuizPage";
import React from "react";

export function App() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/quiz"} element={<Quiz />} />
    </Routes>
  );
}
