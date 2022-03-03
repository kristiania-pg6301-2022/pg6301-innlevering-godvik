import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./Pages/FrontPage";
import { QuizPage } from "./Pages/QuizPage";
import React, { useState } from "react";
import { Answers } from "./Pages/Answers";

export function App() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/quiz"} element={<QuizPage />} />
      <Route path={"/*"} element={<h1>Page does not exist</h1>} />
      <Route path={"/answers/*"} element={<Answers />} />
    </Routes>
  );
}
