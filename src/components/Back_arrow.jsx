import React from "react";
import styled from "styled-components";
import Layout from "../pages/Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Back_button} from "../assets/svg_files/signup/back_button.svg";

const Back_button_wrapper = styled.button`
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.938rem;
    top: 4.813rem;
    border:none;
    background:none;
`

const Back_arrow = () => {

    const navigate = useNavigate();

    return (
        <>
            <Back_button_wrapper onClick={()=>navigate(-1)}>
                <Back_button/>
            </Back_button_wrapper>
        </>
    );
};

export default Back_arrow;