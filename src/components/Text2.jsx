import React from "react";
import styled from "styled-components";
import Layout from "../pages/Layout";

const Text = styled.p`
    position: absolute;
    width: 5rem;
    height: 1.688rem;
    left: 2.75rem;
    top: 18.375rem;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.688rem;

    color: #000000;
`

const Text2 = (props) => {

    return (
        <>
            <Text>{props.text}</Text>
        </>
    );
};

export default Text2;