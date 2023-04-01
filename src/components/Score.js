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

const ScoreTitle = styled.h3`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapScore = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Commentary = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const CommentaryButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #b2adeb;
  border-radius: 50px;

  font-size: 14px;
  color: #4d4d50;
  font-weight: 600;

  outline: none;
`;

const GoHomeButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #b2adeb;
  border-radius: 50px;

  font-size: 14px;
  color: #4d4d50;
  font-weight: 600;

  outline: none;
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
        <ScoreTitle>
          <span
            style={{
              width: "90px",
              height: "40px",
              marginBottom: "10px",
              backgroundColor: "rgb(213, 210, 247)",
              borderRadius: "50px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",

              fontSize: "17px",
            }}
          >
            {nickName}
          </span>{" "}
          퀴즈에 대한 내 점수는?
          <WrapScore>
            <span
              style={{
                width: "90px",
                height: "40px",
                backgroundColor: "rgb(213, 210, 247)",
                borderRadius: "50px",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "24px",
              }}
            >
              {score}
            </span>
            점
          </WrapScore>
        </ScoreTitle>

        <Commentary>
          {score > 90
            ? `우와! 우린 참 친해요!`
            : score > 70
            ? `조금만 더 친해지면 될 것 같아요!`
            : `우리 서로에 관해서 알아가볼까요?`}
        </Commentary>

        <CommentaryButton>{nickName}에게 한 마디</CommentaryButton>

        <GoHomeButton
          onClick={() => {
            navigate("/");
          }}
        >
          시작 화면으로 이동
        </GoHomeButton>
      </Container>
    </ScoreWrap>
  );
}
