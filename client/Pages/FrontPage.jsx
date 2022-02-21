import { Link } from "react-router-dom";
import React from "react";

export function FrontPage() {
  return (
    <div>
      <h1>Welcome to the QUIZ!!!</h1>
      <Link to={"/quiz"}>Take a quiz</Link>
    </div>
  );
}
