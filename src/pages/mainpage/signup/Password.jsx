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

const Password_wrapper = styled.div`
position: absolute;
width: 19.313rem;
height: 1.875rem;
left: 2.75rem;
top: 21.563rem;
display:flex;
flex-direction:row;
align-items:center;
`

const Password_input = styled.input`
width: 15.625rem;
height: 1.688rem;
  border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size: 1rem;  // 폰트 크기 설정3

  &:focus {
    border-bottom: 2px solid blue;  // 포커스 시 밑줄 색상 변경
  }

  &::placeholder {
    color: #ccc;  // placeholder 텍스트 색상
  }
`
const Password_wrapper2 = styled.div`
position: absolute;
width: 19.313rem;
height: 1.875rem;
left: 2.75rem;
top:33.263rem;
display:flex;
flex-direction:row;
align-items:center;
`

const Password_input2 = styled.input`
width: 15.625rem;
height: 1.688rem;
  border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size: 1rem;  // 폰트 크기 설정3

  &:focus {
    border-bottom: 2px solid blue;  // 포커스 시 밑줄 색상 변경
  }

  &::placeholder {
    color: #ccc;  // placeholder 텍스트 색상
  }
`

const Password = () => {

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="사용하실 비밀번호를 입력해 주세요."/>
            <Text2 text="비밀번호"/>
            <Password_wrapper>
                <Password_input></Password_input>
            </Password_wrapper>
            
            <Text3 text="비밀번호 확인"/>
            <Password_wrapper2>
                <Password_input2/>
            </Password_wrapper2>
            <Next_button></Next_button>
        </>
    );
};

export default Password;