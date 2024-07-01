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

const Name_birth = () => {

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="이름과 생년월일을 알려주세요."/>
            <Text2 text="이름"/>

            <Text3 text="생년월일"/>
            <Next_button></Next_button>
        </>
    );
};

export default Name_birth;