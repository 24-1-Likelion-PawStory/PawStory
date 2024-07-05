import React, {useState , useEffect, useContext} from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import Text2 from "../../../components/Text2";
import Text3 from "../../../components/Text3";
import { UserContext } from "../../../contexts/User_context";

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
const Bitrhday_wrapper = styled.div`
    position: absolute;
    width: 17.938rem;
    height: 1.688rem;
    left: 44px;
    top: 31.813rem;
    display:flex;
    flex-direction:row;
    align-items:center;
`
const Yearbox = styled.select`
width: 4.75rem;
height: 1.688rem;
border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거
`
const Monthbox = styled.select`
position:relative;
left:1rem;
width: 3.375rem;
height: 1.688rem;
border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거


`
const Daybox = styled.select`
position:relative;
left:2rem;
width: 3.375rem;
height: 1.688rem;
border: none;
  border-bottom: 1px solid black;  // 밑줄을 설정
  padding: 0.2rem;  // 패딩을 설정하여 텍스트 입력 시 여백을 줌
  outline: none;  // 포커스 시 외곽선을 제거

`
const BIRTHDAY_YEAR_LIST = Array.from(
    { length: 15 },
    (_, i) => `${i + 1990}`,
  );
const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

const Name_birth = () => {
  const {user_data, set_user_data} = useContext(UserContext);
  const [name,set_name] = useState("");
  const [year,set_year] = useState(BIRTHDAY_YEAR_LIST[0]);
  const [month,set_month] = useState(BIRTHDAY_MONTH_LIST[0]);
  const [day,set_day] = useState(BIRTHDAY_DAY_LIST[0]);

  const [is_next_disabled, set_is_next_disabled] = useState(true);

  useEffect(() => {
      set_is_next_disabled(!(name && year && month && day));
  }, [name, year, month, day]);

  const handle_submit = () => {
    const user_bir = `${year}-${month}-${day}`;
    set_user_data({ ...user_data, name, user_bir });
    console.log(`변수: ${user_data.name} ${user_data.user_bir}`);
};

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="이름과 생년월일을 알려주세요."/>
            <Text2 text="이름"/>
            <Input_box type="text" value={name} placeholder="이름을 입력해 주세요." onChange={(e) => set_name(e.target.value)}></Input_box>

            <Text3 text="생년월일"/>
            <Bitrhday_wrapper>
            <Yearbox value={year} onChange={(e) => set_year(e.target.value)}>
            {BIRTHDAY_YEAR_LIST.map((year, index) => (
                <option key={index} value={year}>{year}</option>
            ))}
            </Yearbox>
            <Monthbox value={month} onChange={(e) => set_month(e.target.value)}>
            {BIRTHDAY_MONTH_LIST.map((month, index) => (
                <option key={index} value={month}>{month}</option>
            ))}
            </Monthbox>
            <Daybox value={day} onChange={(e) => set_day(e.target.value)}>
            {BIRTHDAY_DAY_LIST.map((day, index) => (
                <option key={index} value={day}>{day}</option>
            ))}
            </Daybox>


            </Bitrhday_wrapper>
            <Next_button onClick={handle_submit} disabled={is_next_disabled}></Next_button>
        </>
    );
};

export default Name_birth;