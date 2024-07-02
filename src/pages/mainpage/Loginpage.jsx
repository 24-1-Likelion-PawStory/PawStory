import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../components/Back_arrow";
import Next_button from "../../components/Next_button";
import {ReactComponent as Logo} from "../../assets/svg_files/logo.svg"

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

    return (
        <>
            <Back_arrow></Back_arrow>

            <Logo_wrapper>
                <Logo/>
            </Logo_wrapper>
    
            <Input_id type="text" placeholder="아이디 입력"></Input_id>
            <Input_password type="text" placeholder="비밀번호 입력"></Input_password>
            <Next_button></Next_button>
        </>
    );
};

export default Loginpage;