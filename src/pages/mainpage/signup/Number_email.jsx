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

const Number_wrapper = styled.div`
position: absolute;
width: 17.75rem;
height: 1.5rem;
left: 2.75rem;
top: 21.75rem;
/* border: 1px solid black; */
display:flex;
flex-direction:row;
align-items:center;
`
const Number_input_1 = styled.input`
    width:3.125rem;
    height: 1.3rem;
    border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size:1.1rem;
  text-align: center;  // 텍스트를 중앙 정렬
`
const Number_input_2 = styled.input`
    width:4.063rem;
    height: 1.3rem;
    border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size:1.1rem;
  text-align: center;  // 텍스트를 중앙 정렬
`
const Number_input_3 = styled.input`
    width:4.063rem;
    height: 1.3rem;
    border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size:1.1rem;
  text-align: center;  // 텍스트를 중앙 정렬
`

const Email_wrapper = styled.div`
position: absolute;
width: 17.75rem;
height: 1.875rem;
left: 2.75rem;
top: 31.313rem;
display:flex;
flex-direction:row;
align-items:center;
`
const Email_input_1 = styled.input`
    width:6.875rem;
    height: 1.3rem;
    border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size:1rem;
  text-align: center;  // 텍스트를 중앙 정렬
`

const Email_input_2 = styled.select`
width:6.875rem;
height: 1.7rem;
border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
  font-size:1rem;
`
const Email_list = [
    "naver.com",
    "gmail.com",
    "daum.net",
    "hotmail.com",
    "yahoo.com",
    "outlook.com",
    "icloud.com",
    "kakao.com",
    "hanmail.net",
    "nate.com"
  ];
  

const Number_email = () => {

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="전화번호와 이메일을 알려주세요."/>
            <Text2 text="전화번호"/>
            <Number_wrapper>
                <Number_input_1></Number_input_1>
                <h2>-</h2>
                <Number_input_2></Number_input_2>
                <h2>-</h2>
                <Number_input_3></Number_input_3>
            </Number_wrapper>

            <Email_wrapper>
                <Email_input_1></Email_input_1>
                <h3>@</h3>
                <Email_input_2> {Email_list.map((email, index) => (
                <option key={index} value={email}>{email}</option>
                ))}</Email_input_2>
            </Email_wrapper>

            <Text3 text="이메일"/>
            <Next_button></Next_button>
        </>
    );
};


export default Number_email;