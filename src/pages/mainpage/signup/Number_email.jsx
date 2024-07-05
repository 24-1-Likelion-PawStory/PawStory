import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/User_context";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import Text2 from "../../../components/Text2";
import Text3 from "../../../components/Text3";

const Number_wrapper = styled.div`
  position: absolute;
  width: 17.75rem;
  height: 1.5rem;
  left: 2.75rem;
  top: 21.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Number_input_1 = styled.input`
  width: 3.125rem;
  height: 1.3rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1.1rem;
  text-align: center;
`;

const Number_input_2 = styled.input`
  width: 4.063rem;
  height: 1.3rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1.1rem;
  text-align: center;
`;

const Number_input_3 = styled.input`
  width: 4.063rem;
  height: 1.3rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1.1rem;
  text-align: center;
`;

const Email_wrapper = styled.div`
  position: absolute;
  width: 17.75rem;
  height: 1.875rem;
  left: 2.75rem;
  top: 31.313rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Email_input_1 = styled.input`
  width: 6.875rem;
  height: 1.3rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1rem;
  text-align: center;
`;

const Email_input_2 = styled.select`
  width: 6.875rem;
  height: 1.7rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  outline: none;
  font-size: 1rem;
`;

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
  const { user_data, set_user_data } = useContext(UserContext);
  const [number_1, set_number_1] = useState("");
  const [number_2, set_number_2] = useState("");
  const [number_3, set_number_3] = useState("");
  const [email_1, set_email_1] = useState("");
  const [email_2, set_email_2] = useState(Email_list[0]);
  const [is_next_disabled, set_is_next_disabled] = useState(true);

  useEffect(() => {
    set_is_next_disabled(!(number_1 && number_2 && number_3 && email_1));
  }, [number_1, number_2, number_3, email_1, email_2]);

  const handle_submit = () => {
    const phone_number = `${number_1}-${number_2}-${number_3}`;
    const email = `${email_1}@${email_2}`;
    set_user_data({ ...user_data, phone_number, email });
  };

  return (
    <>
      <Back_arrow />
      <Text1 text="전화번호와 이메일을 알려주세요." />
      <Text2 text="전화번호" />
      <Number_wrapper>
        <Number_input_1
          value={number_1}
          onChange={(e) => set_number_1(e.target.value)}
        />
        <h2>-</h2>
        <Number_input_2
          value={number_2}
          onChange={(e) => set_number_2(e.target.value)}
        />
        <h2>-</h2>
        <Number_input_3
          value={number_3}
          onChange={(e) => set_number_3(e.target.value)}
        />
      </Number_wrapper>

      <Email_wrapper>
        <Email_input_1
          value={email_1}
          onChange={(e) => set_email_1(e.target.value)}
        />
        <h3>@</h3>
        <Email_input_2
          value={email_2}
          onChange={(e) => set_email_2(e.target.value)}
        >
          {Email_list.map((email, index) => (
            <option key={index} value={email}>
              {email}
            </option>
          ))}
        </Email_input_2>
      </Email_wrapper>

      <Text3 text="이메일" />
      <Next_button onClick={handle_submit} disabled={is_next_disabled} />
    </>
  );
};

export default Number_email;
