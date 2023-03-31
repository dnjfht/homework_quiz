import React from "react";
import { Route, Routes } from "react-router-dom";
import Quiz from "../components/Quiz";
import Score from "../components/Score";
import Start from "../components/Start";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  );
}
