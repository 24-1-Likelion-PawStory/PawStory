/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { styled } from 'styled-components';
import "./Fonts.css";
import toggle_button from "../assets/icons/toggle_button.png";

const Toggle_wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1.5rem;
  justify-content: flex-end;
  position: relative;
`;

const Toggle_button = styled.div`
  display: flex;
  margin-right: 2.688rem;
  cursor: pointer;
`

const Toggle_text = styled.div`
  width: auto;
  height: 1rem;
  margin: 0.4rem 0.313rem 0 0;
  font-family: "OpenSans";
  font-weight: 400;
  font-size: 0.75rem;
  color: #000000;
`

const Toggle_image = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  margin: 0.5rem 0 0 0;
`;

const Toggle_options = styled.ul`
  position: absolute;
  top: 100%;
  right: 2.688rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: ${({Open}) => Open ? 'block' : 'none'};
  font-family: "OpenSans";
  font-weight: 400;
  font-size: 0.75rem;
`

const Toggle_option = styled.li`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Toggle = () => {
  const [selected_option, set_option] = useState('전체공개');
  const [Open, set_open] = useState(false);

  const options = ['전체공개', '팔로워공개', '비공개'];

  const handle_toggle = () => {
    set_open(!Open);
  };

  const handle_option = (option) => {
    set_option(option);
    set_open(false);
  }

  return (
    <Toggle_wrapper>
      <Toggle_button onClick={handle_toggle} >
        <Toggle_text>
          {selected_option}
        </Toggle_text>
        <Toggle_image
          src={toggle_button}
          alt="toggle"
        />
        <Toggle_options Open={Open}>
          {options.map((option) => (
            <Toggle_option key={option} onClick={() => handle_option(option)}>
              {option}
            </Toggle_option>
          ))}
        </Toggle_options>
      </Toggle_button>
    </Toggle_wrapper>
  );
}

export default Toggle;