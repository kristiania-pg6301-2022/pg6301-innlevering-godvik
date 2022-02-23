import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "../Pages/FrontPage";
import { MemoryRouter } from "react-router-dom";
import { QuizPage } from "../Pages/QuizPage";
import { Answers } from "../Pages/Answers";
import pretty from "pretty";

describe("QuizApp client testing", () => {
  it("Shows answer status", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage initialEntries={["/"]} score={3} answeredQuestions={10} />
      </MemoryRouter>,
      element
    );
    expect(element.querySelector("[data-testid=status]").textContent).toEqual(
      "You have answered 3 of 10 correctly"
    );
    expect(pretty(element.innerHTML)).toMatchSnapshot();
  });

  it("snapshot test for wrong answers", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Answers initialEntries={["/wrong"]} />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });

  it("snapshot test for right answers", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Answers initialEntries={["/correct"]} />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });
});
