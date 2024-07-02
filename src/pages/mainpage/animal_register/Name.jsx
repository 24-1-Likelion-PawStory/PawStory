import React from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button";
import Text1 from "../../../components/Text1";
import Text2 from "../../../components/Text2";
import Text3 from "../../../components/Text3";

const Input_box = styled.input`
position: absolute;
width: 15.875rem;
height: 1.688rem;
left: 2.813rem;
top: 21.563rem;
  border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size: 1rem;  // 폰트 크기 설정

  &:focus {
    border-bottom: 2px solid blue;  // 포커스 시 밑줄 색상 변경
  }

  &::placeholder {
    color: #ccc;  // placeholder 텍스트 색상
  }
`

const Name = () => {

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="반려동물의 이름을 알려주세요."/>
            <Text2 text="이름"/>
            <Input_box type="text" placeholder="이름을 입력해 주세요."></Input_box>
            <Next_button></Next_button>
        </>
    );
};

export default Name;