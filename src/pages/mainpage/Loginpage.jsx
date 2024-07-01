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

const Loginpage = () => {

    return (
        <>
            <Back_arrow></Back_arrow>

            <Logo_wrapper>
                <Logo/>
            </Logo_wrapper>
    
            <Next_button></Next_button>
        </>
    );
};

export default Loginpage;