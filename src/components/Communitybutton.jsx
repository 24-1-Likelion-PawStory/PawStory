/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { styled } from "styled-components";


const Community_button = styled.button`
  width: 3.9rem;
  height: 1.313rem;
  background-color: transparent;  // 항상 투명 배경
  color: ${(props) => (props.active ? "#FFAA2F" : "#C4C4C4")}; // 텍스트 색상
  border: 0.063rem ${(props) => (props.active ? "solid #FFAA2F" : "solid #C4C4C4")}; // 테두리 색상
  border-radius: 0.5rem;
  font-family: "OpenSans";
  font-weight: 400;
  font-size: 0.75rem;
  cursor: pointer;
`;

const CommunityButton = ({ text, active, onClick }) => {
  return (
    <Community_button active={active} onClick={onClick}>
      {text}
    </Community_button>
  );
};

export default CommunityButton;
