import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "../Pages/FrontPage";
import { MemoryRouter } from "react-router-dom";
import { QuizPage } from "../Pages/QuizPage";
import pretty from "pretty";

describe("QuizApp client testing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage score={3} answeredQuestions={10} />
      </MemoryRouter>,
      div
    );
    expect(div.querySelector("[data-testid=status]").textContent).toEqual(
      "You have answered 3 of 10 correctly"
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });

  it("snapshot test for quizapp", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });
});
