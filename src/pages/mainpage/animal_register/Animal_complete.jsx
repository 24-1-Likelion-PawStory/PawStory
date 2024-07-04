import React from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Check_img} from "../../../assets/svg_files/complete_check.svg";
import Next_button from "../../../components/Next_button";

const Check_img_wrapper = styled.div`
    position: absolute;
    width: 4rem;
    height: 4rem;
    left: 9.75rem;
    top: 13.438rem;
`
const Text1 = styled.p`
    position: absolute;
    top: 21.188rem;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.688rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`
const Text2 = styled.p`
    position: absolute;
    top: 24.188rem;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 0.563rem;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`

const Complete = () => {

    return (
        <>
            <Check_img_wrapper>
                <Check_img/>
            </Check_img_wrapper>
            <Text1>반려동물 등록 완료!</Text1>
            <Text2>이제 포스토리 서비스를 자유롭게 이용할 수 있어요.</Text2>
            <Next_button/>
        </>
    );
};

export default Complete;