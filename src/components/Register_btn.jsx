/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { styled } from 'styled-components';
import "./Fonts.css";

const Btn_wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.625rem;
  margin: 2.188rem 0 0 0;
  justify-content: center;
`;

const Button = styled.button`
  width: 19.875rem;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  background-color: #FFFFFF;
  color: #FFAA2F;
  border: 0.094rem solid #FFAA2F;
  border-radius: 0.625rem;
  font-family: 'OpenSans';
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register_btn = ({ onClick }) => {
  return (
    <Btn_wrapper>
      <Button onClick={onClick}>
        등록
      </Button>
    </Btn_wrapper>
  );
}

export default Register_btn;