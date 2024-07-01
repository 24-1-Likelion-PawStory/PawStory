import React from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button";
import Text1 from "../../../components/Text1";
import Text2 from "../../../components/Text2";
import Text3 from "../../../components/Text3";

const Password = () => {

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="사용하실 비밀번호를 입력해 주세요."/>
            <Text2 text="비밀번호"/>
            
            <Text3 text="비밀번호 확인"/>
            <Next_button></Next_button>
        </>
    );
};

export default Password;