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
  height: 1.875rem;
  left: 2.75rem;
  top: 21.563rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  height: 1.875rem;
  left: 2.75rem;
  top: 33.263rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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

const Password = () => {
  const { user_data, set_user_data } = useContext(UserContext);
  const [pw, set_pw] = useState("");
  const [pw_check, set_pw_check] = useState("");
  const [is_next_disabled, set_is_next_disabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    set_is_next_disabled(!(pw && pw_check && pw === pw_check));
  }, [pw, pw_check]);

  const handle_submit = async () => {
    const password = `${pw_check}`;
    const updated_user_data = { ...user_data, password };

    try {
      await axios.post('/api/user', updated_user_data);
      navigate('/signup_name_birth/number/id/password/complete'); // POST 후 다음 페이지로 이동
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
          placeholder="사용하실 비밀번호를 입력해 주세요."
          value={pw}
          onChange={(e) => set_pw(e.target.value)}
        />
      </Password_wrapper>
      <Text3 text="비밀번호 확인" />
      <Password_wrapper2>
        <Password_input2 
          type="password"
          placeholder="비밀번호를 재입력해 주세요."
          value={pw_check}
          onChange={(e) => set_pw_check(e.target.value)}
        />
      </Password_wrapper2>
      <Next_button onClick={handle_submit} disabled={is_next_disabled} />
    </>
  );
};

export default Password;
