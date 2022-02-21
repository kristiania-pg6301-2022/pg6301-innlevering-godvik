import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome to the QUIZ!!!</h1>
      <Link to={"/quiz"}>Take a quiz</Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      {/*<Route path={"/quiz"} element={<Quiz />} />*/}
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    {" "}
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
