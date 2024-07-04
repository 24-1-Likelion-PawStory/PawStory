import React, { useContext,useState,useEffect } from "react";
import styled from "styled-components";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../components/Back_arrow";
import Next_button from "../../components/Next_button_check";
import {ReactComponent as Logo} from "../../assets/svg_files/logo.svg"
import { UserContext } from "../../contexts/User_context";
import axios from "axios";

const Logo_wrapper = styled.div`
    position: absolute;
    width: 13rem;
    height: 10.471rem;
    top: 10.25rem;
`

const Input_id = styled.input`
box-sizing: border-box;

position: absolute;
width: 19.063rem;
height: 3.313rem;
top: 26.063rem;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 10px;
padding-left:1rem;
font-size:0.9rem;
`
const Input_password = styled.input`
box-sizing: border-box;

position: absolute;
width: 19.063rem;
height: 3.313rem;
top: 30.688rem;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 10px;
padding-left:1rem;
font-size:0.9rem;
`

const Loginpage = () => {
    const navigate = useNavigate();
    const {login_data,set_login_data} = useContext(UserContext);
    const [id,set_id]=useState("");
    const [pw,set_pw]=useState("");

    const handle_submit = async () => {
        const user_id = `${id}`
        const password = `${pw}`
        set_login_data({ ...login_data, user_id });
        const updated_login_data = {...login_data , password};
        try {
            await axios.post('/api/user', updated_login_data);
            navigate('/my'); // POST 후 다음 페이지로 이동
          } catch (error) {
            console.error('데이터 전송 중 오류가 발생했습니다:', error);
          }
        };
    const [is_next_disabled, set_is_next_disabled] = useState(true);
    useEffect(() => {
        set_is_next_disabled(!(id && pw));
    }, [id,pw]);

    return (
        <>

            <Back_arrow></Back_arrow>
            <Logo_wrapper>
                <Logo/>
            </Logo_wrapper>
    
            <Input_id type="text" placeholder="아이디 입력" value={id} onChange={(e) => set_id(e.target.value)}></Input_id>
            <Input_password type="text" placeholder="비밀번호 입력" value={pw} onChange={(e) => set_pw(e.target.value)}></Input_password>
            <Next_button onClick={handle_submit} disabled={is_next_disabled}></Next_button>
        </>
    );
};

export default Loginpage;