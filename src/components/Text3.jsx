import React from "react";
import styled from "styled-components";
import Layout from "../pages/Layout";

const Text = styled.p`
    position: absolute;
    width: 12rem;
    height: 1.438rem;
    left: 2.75rem;
    top: 28.375rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.438rem;

    color: #000000;
`

const Text3 = (props) => {

    return (
        <>
            <Text>{props.text}</Text>
        </>
    );
};

export default Text3;