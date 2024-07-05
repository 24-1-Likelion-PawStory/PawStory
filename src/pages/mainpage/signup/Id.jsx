import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import Text2 from "../../../components/Text2";
import { ReactComponent as Duplicate_img } from "../../../assets/svg_files/signup/duplicate_img.svg";
import { UserContext } from "../../../contexts/User_context";

const Id_wrapper = styled.div`
  position: absolute;
  width: 19.313rem;
  height: 1.875rem;
  left: 2.75rem;
  top: 21.563rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Id_box = styled.input`
  width: 13.875rem;
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

const Duplicate_button = styled.button`
  width: 5rem;
  height: 1.875rem;
  border: none;
  background: none;
`;

const DuplicateMessage = styled.p`
  position:absolute;
  left: 2.75rem;
  top: 21.563rem;
  font-size: 0.75rem;
  color: green;
  margin-top: 0.5rem;
`;

const Id = () => {
  const { user_data, set_user_data } = useContext(UserContext);
  const [id, set_id] = useState("");
  const [response, set_response] = useState(false);
  const [is_next_disabled, set_is_next_disabled] = useState(true);

  const handle_submit =  async() => {
    const user_id = `${id}`;
    set_user_data({ ...user_data, user_id });
    await console.log(`변수: ${user_data.user_id}`);
  };

  const handle_duplicate_check = async () => {
    const user_id = `${id}`;
    try {
      const res = await axios.post('https://pawstory.p-e.kr//users/check_user_id', { user_id });
      set_response(res.data.available);
      if (res.data.available) {
        set_is_next_disabled(false);
      } else {
        set_is_next_disabled(true);
      }
    } catch (error) {
      console.error('Error checking user ID:', error);
      set_is_next_disabled(true);
    }
  };

  useEffect(() => {
    set_is_next_disabled(!(id && response));
  }, [id, response]);

  return (
    <>
      <Back_arrow />
      <Text1 text="사용하실 아이디를 입력해 주세요." />
      <Text2 text="아이디" />
      <Id_wrapper>
        <Id_box
          type="text"
          placeholder="사용하실 아이디를 입력해 주세요."
          value={id}
          onChange={(e) => set_id(e.target.value)}
        />
        <Duplicate_button onClick={handle_duplicate_check}>
          <Duplicate_img />
        </Duplicate_button>
        {response && <DuplicateMessage>중복 확인 완료!</DuplicateMessage>}
      </Id_wrapper>
      <Next_button onClick={handle_submit} disabled={is_next_disabled} />
    </>
  );
};

export default Id;
