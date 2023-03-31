import React from "react";
import { useRef } from "react";
// import { useState } from "react";
import styled from "styled-components";
import img01 from "../img/img01.png";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

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

const ImageWrap = styled.img`
  width: 90%;
`;

const Title = styled.h3`
  width: 100%;

  margin-top: 20px;

  text-align: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const InputWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 16px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #918ae9;
  border-radius: 50px;

  color: #666;

  outline: none;

  &::placeholder {
    color: #c2bfe8;
  }
`;

const StartButton = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 50px;
  margin-top: 20px;
  background-color: #d5d2f7;

  color: #666;
  font-size: 12px;

  outline: none;
`;

export default function Start() {
  const userName = useSelector((state) => state.user.nickName);
  console.log(userName);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const [name, setName] = useState("르탄이");

  const textInput = useRef(null);
  console.log(textInput);

  const handleChangename = (event) => {
    event.preventDefault();

    // setName(textInput.current.value);

    dispatch(changeName(textInput.current.value));

    textInput.current.value = "";

    navigate("/quiz");
  };

  return (
    <QuizWrap>
      <Container>
        <ImageWrap src={img01} alt="르탄이" />

        <Title>
          나는
          <span
            style={{
              width: "90px",
              height: "34px",
              marginLeft: "10px",
              backgroundColor: "rgb(213, 210, 247)",
              borderRadius: "50px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",

              fontSize: "16px",
            }}
          >
            {userName}
          </span>
          에 대해 얼마나 알고 있을까?
        </Title>

        <InputWrap>
          <NameInput
            type="text"
            ref={textInput}
            placeholder="이름을 입력하세요."
          />
          <StartButton onClick={handleChangename}>시작하기</StartButton>
        </InputWrap>
      </Container>
    </QuizWrap>
  );
}
