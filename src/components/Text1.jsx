import React from "react";
import styled from "styled-components";
import Layout from "../pages/Layout";

const Text_wrapper=styled.div`
    position: absolute;
    width: 11.438rem;
    height: 4.438rem;
    left: 2.75rem;
    top: 10.063rem;
    word-break:break-all;
`

const Text = styled.p`
    margin:0;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.063rem;

    color: #000000;
`

const Text1 = (props) => {

    return (
        <>
            <Text_wrapper>
                <Text>{props.text}</Text>
            </Text_wrapper>
        </>
    );
};

export default Text1;