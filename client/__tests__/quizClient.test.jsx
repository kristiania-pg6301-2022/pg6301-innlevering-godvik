import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "../Pages/FrontPage";
import { MemoryRouter } from "react-router-dom";
import { QuizPage } from "../Pages/QuizPage";
import { Answers } from "../Pages/Answers";
import pretty from "pretty";

describe("QuizApp client testing", () => {
  it("should render frontpage", function () {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });

  it("Shows answer status", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      element
    );

    expect(pretty(element.innerHTML)).toMatchSnapshot();
  });

  it("snapshot on route /answers/wrong when question is wrong", function () {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/wrong"]}>
        <Answers />} />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });

  it("snapshot on route /answers/wrong when question is correct", function () {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/correct"]}>
        <Answers />} />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });

  it("should show a random question on QuizPage", async function () {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/quiz"]}>
        <QuizPage />
      </MemoryRouter>,
      div
    );
    expect(pretty(div.innerHTML)).toMatchSnapshot();
  });
});
