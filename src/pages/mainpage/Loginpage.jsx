import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../components/Back_arrow";
import Next_button from "../../components/Next_button_check";
import { ReactComponent as Logo } from "../../assets/svg_files/logo.svg";
import { UserContext } from "../../contexts/User_context";
import axios from "axios";

const Logo_wrapper = styled.div`
  position: absolute;
  width: 13rem;
  height: 10.471rem;
  top: 10.25rem;
`;

const Input_id = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 19.063rem;
  height: 3.313rem;
  top: 26.063rem;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-left: 1rem;
  font-size: 0.9rem;
`;

const Input_password = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 19.063rem;
  height: 3.313rem;
  top: 30.688rem;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-left: 1rem;
  font-size: 0.9rem;
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: 34.5rem;
  color: red;
  font-size: 0.75rem;
`;

const Loginpage = () => {
  const navigate = useNavigate();
  const { login_data, set_login_data } = useContext(UserContext);
  const [id, set_id] = useState("");
  const [pw, set_pw] = useState("");
  const [error_message, set_error_message] = useState("");

  const handle_submit = async () => {
    const user_id = `${id}`;
    const password = `${pw}`;
    set_login_data({ ...login_data, user_id });
    const updated_login_data = { ...login_data, password };

    try {
      await axios.post('https://pawstory.p-e.kr/users/login', updated_login_data);
      navigate('/my'); // POST 후 다음 페이지로 이동
    } catch (error) {
      if (error.response && error.response.status === 401) {
        set_error_message("아이디 또는 비밀번호를 확인해 주세요.");
      } else {
        console.error('로그인 실패:', error);
      }
    }
  };

  const [is_next_disabled, set_is_next_disabled] = useState(true);
  useEffect(() => {
    set_is_next_disabled(!(id && pw));
  }, [id, pw]);

  return (
    <>
      <Back_arrow />
      <Logo_wrapper>
        <Logo />
      </Logo_wrapper>

      <Input_id
        type="text"
        placeholder="아이디 입력"
        value={id}
        onChange={(e) => set_id(e.target.value)}
      />
      <Input_password
        type="password"
        placeholder="비밀번호 입력"
        value={pw}
        onChange={(e) => set_pw(e.target.value)}
      />
      {error_message && <ErrorMessage>{error_message}</ErrorMessage>}
      <Next_button onClick={handle_submit} disabled={is_next_disabled} />
    </>
  );
};

export default Loginpage;
