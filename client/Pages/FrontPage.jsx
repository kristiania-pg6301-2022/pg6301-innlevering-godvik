import { Link } from "react-router-dom";
import React from "react";
import { useLoader } from "../utils/hooks/useLoader";
import { fetchJSON } from "../utils/http";

export function FrontPage() {
  const {
    data: score,
    loading,
    reload,
  } = useLoader(async () => fetchJSON("/api/score"));

  return (
    <div>
      <h1>Welcome to the QUIZ!!!</h1>
      {loading && <p>Loading...</p>}
      {score && (
        <div data-testid={"status"}>
          You have answered {score?.correct} of {score?.answered} correctly
        </div>
      )}
      <Link to={"/quiz"}>Take a quiz</Link>
    </div>
  );
}
