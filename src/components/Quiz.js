import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img01 from "../img/img01.png";
import { addAnswer } from "../redux/modules/quiz";

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
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerTitle = styled.p`
  width: 120px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgb(213, 210, 247);
  border-radius: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Question = styled.h3`
  margin: 0;

  font-size: 21px;
`;

const ImageWrap = styled.img`
  width: 100%;
`;

const WrapSelectAnswer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SelectAnswer = styled.button`
  background-color: transparent;
  border: none;

  font-size: 80px;
  font-weight: 600;
  color: rgb(213, 210, 247);
`;

export default function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  console.log(quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
  console.log(user_answer_list);

  const setAnswer = (user_answer) => {
    dispatch(addAnswer(user_answer));
  };

  useEffect(() => {
    if (user_answer_list.length === quiz_list.length) {
      navigate("/score");
      return;
    }
  }, [user_answer_list]);

  if (user_answer_list.length === quiz_list.length) {
    return null;
  }

  return (
    <QuizWrap>
      <Container>
        <TitleWrap style={{ textAlign: "center" }}>
          <AnswerTitle>{user_answer_list.length + 1}번 문제</AnswerTitle>

          <Question>{quiz_list[user_answer_list.length].question}</Question>
        </TitleWrap>

        <ImageWrap src={img01} />

        <WrapSelectAnswer>
          <SelectAnswer
            onClick={() => {
              setAnswer(true);
            }}
          >
            O
          </SelectAnswer>
          <SelectAnswer
            onClick={() => {
              setAnswer(false);
            }}
          >
            X
          </SelectAnswer>
        </WrapSelectAnswer>
      </Container>
    </QuizWrap>
  );
}
