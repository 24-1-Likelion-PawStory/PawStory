import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/svg_files/logo.svg";
import {ReactComponent as Login_button} from "../../assets/svg_files/login_button.svg";
import {ReactComponent as Not_yet} from "../../assets/svg_files/not_yet.svg";

const Logo_wrapper = styled.div`
    width:13rem;
    height:10.5rem;
    display:flex;
    position:absolute;
    top:12.688rem;
    `
const Login_botton_wrapper = styled.button`
    width:18.75rem;
    height:3.313rem;
    position:absolute;
    border:none;
    background:none;
    top:34.375rem;
    left: 1.875rem;


`
const Not_yet_wrapper = styled.div`
    width:18.75rem;
    height:1.688rem;
    position:absolute;
    top:40.188rem;
`

const Signup_link = styled(Link)`
    position: absolute;
    width: 59px;
    height: 22px;
    left: 156px;
    top: 679px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #FFAA2F;
`

const Loginhome = () =>{
    const navigate=useNavigate();

    return (
        <>
            <Logo_wrapper>
                <Logo/>
            </Logo_wrapper>
            <Login_botton_wrapper onClick={() => navigate("/loginpage")}>
                <Login_button/>
            </Login_botton_wrapper>
            <Not_yet_wrapper>
                <Not_yet/>
            </Not_yet_wrapper>
            <Signup_link to="/signup_name_birth">회원가입</Signup_link>
        </>
    );
};

export default Loginhome;