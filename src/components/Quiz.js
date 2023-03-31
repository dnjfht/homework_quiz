import React from "react";
import styled from "styled-components";

const QuizWrap = styled.div`
  width: 320px;
  height: 550px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #ccc;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #f4f4f4;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Quiz() {
  return (
    <QuizWrap>
      <Container>Quiz</Container>
    </QuizWrap>
  );
}
