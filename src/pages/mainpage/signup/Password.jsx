import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import Text2 from "../../../components/Text2";
import Text3 from "../../../components/Text3";
import { UserContext } from "../../../contexts/User_context";

const Password_wrapper = styled.div`
  position: absolute;
  width: 19.313rem;
  height: auto;
  left: 2.75rem;
  top: 21.563rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Password_input = styled.input`
  width: 15.625rem;
  height: 1.688rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-bottom: 2px solid blue;
  }

  &::placeholder {
    color: #ccc;
  }
`;

const Password_wrapper2 = styled.div`
  position: absolute;
  width: 19.313rem;
  height: auto;
  left: 2.75rem;
  top: 33.263rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Password_input2 = styled.input`
  width: 15.625rem;
  height: 1.688rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-bottom: 2px solid blue;
  }

  &::placeholder {
    color: #ccc;
  }
`;

const WarningContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const WarningBox = styled.div`
  padding: 0.25rem;  // 패딩을 줄임
  margin-right: 0.5rem;
  border: 1px solid red;
  border-radius: 5px;
  background-color: #ffe6e6;
  color: red;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const Password = () => {
  const { user_data, set_user_data } = useContext(UserContext);
  const [pw, set_pw] = useState("");
  const [pw_check, set_pw_check] = useState("");
  const [is_next_disabled, set_is_next_disabled] = useState(true);
  const [conditions, set_conditions] = useState({
    length: true,
    letter: true,
    number: true,
    special: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    const new_conditions = {
      length: pw.length >= 8,
      letter: /[A-Za-z]/.test(pw),
      number: /[0-9]/.test(pw),
      special: /[!@#$%^&*]/.test(pw)
    };
    set_conditions(new_conditions);

    const passwordValid = Object.values(new_conditions).every(Boolean);
    set_is_next_disabled(!(passwordValid && pw && pw_check && pw === pw_check));
  }, [pw, pw_check]);

  const handle_submit = async () => {
    const password = `${pw_check}`;
    const updated_user_data = { ...user_data, password };

    try {
      const res = await axios.post('https://pawstory.p-e.kr/users/signup', updated_user_data);
      navigate('/signup_name_birth/number/id/password/complete'); // POST 후 다음 페이지로 이동
      localStorage.setItem("temp_tokken",res.data.temp_access_token)
      console.log('sign up complete');
    } catch (error) {
      console.error('데이터 전송 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <>
      <Back_arrow />
      <Text1 text="사용하실 비밀번호를 입력해 주세요." />
      <Text2 text="비밀번호" />
      <Password_wrapper>
        <Password_input 
          type="password"
          placeholder="비밀번호 형식: 영문,숫자,특수문자 포함."
          value={pw}
          onChange={(e) => set_pw(e.target.value)}
        />
        <WarningContainer>
          {!conditions.length && <WarningBox>8자 이하</WarningBox>}
          {!conditions.letter && <WarningBox>영문 미포함</WarningBox>}
          {!conditions.number && <WarningBox>숫자 미포함</WarningBox>}
          {!conditions.special && <WarningBox>특수문자 미포함</WarningBox>}
        </WarningContainer>
      </Password_wrapper>
      <Text3 text="비밀번호 확인" />
      <Password_wrapper2>
        <Password_input2 
          type="password"
          placeholder="비밀번호를 재입력해 주세요."
          value={pw_check}
          onChange={(e) => set_pw_check(e.target.value)}
        />
        {pw && pw_check && pw !== pw_check && <WarningBox>비밀번호 불일치</WarningBox>}
      </Password_wrapper2>
      <Next_button onClick={handle_submit} disabled={is_next_disabled} />
    </>
  );
};

export default Password;