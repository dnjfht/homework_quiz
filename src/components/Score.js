import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ScoreWrap = styled.div`
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

export default function Score() {
  const navigate = useNavigate();

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
  const nickName = useSelector((state) => state.user.nickName);
  console.log(nickName);

  const _score =
    (100 / quiz_list.length) *
    quiz_list.filter((q, idx) => {
      return q.answer === user_answer_list[idx];
    }).length;

  const score = Math.round(_score);
  console.log(score);

  return (
    <ScoreWrap>
      <Container>
        <h3>
          {nickName} 퀴즈에 대한 내 점수는 <br />
          {score}점
        </h3>

        <p>우와! 우린 참 친해요!</p>

        <button>{nickName}에게 한 마디</button>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          시작 화면으로 이동
        </button>
      </Container>
    </ScoreWrap>
  );
}
