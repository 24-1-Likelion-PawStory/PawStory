/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { styled } from 'styled-components';
import Back_button from "../components/Back";

const Write_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 47.813rem;
  position: absolute;
  top: 2.938rem;
`


const Home_write = () => {
  return (
    <>
      <Write_container>
        <Back_button/>
      </Write_container>
    </>
  )
};

export default Home_write;