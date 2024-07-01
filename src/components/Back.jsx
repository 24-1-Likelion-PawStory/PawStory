/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import back_button from "../assets/icons/back_button.png";

const Back_wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3.375rem;
  justify-content: flex-start;
`;

const Back_button = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1.875rem 0 0 1.938rem;
  cursor: pointer;
`;

const Back = () => {
  const navigate = useNavigate();

  return (
    <Back_wrapper>
      <Back_button
        src={back_button}
        alt="back"
        onClick={() => navigate(-1)} 
      />
    </Back_wrapper>
  );
}

export default Back;