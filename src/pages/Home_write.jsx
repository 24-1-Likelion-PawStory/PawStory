/* eslint-disable react/jsx-pascal-case */
import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Back_button from "../components/Back";
import Toggle from "../components/Toggle";
import Post_img from "../components/Post_img"
import Post_text from "../components/Post_text"
import Register from "../components/Register_btn"

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
  const [postData, setPostData] = useState({
    imageUrl: '',
    caption: '',
    username: '',
  });
  const navigate = useNavigate();


  const handleRegister = () => {
    // 추후 백엔드와 연결
    navigate('/diary', { state: { postData } });
  };

  return (
    <>
      <Write_container>
        <Back_button/>
        <Toggle/>
        <Post_img/>
        <Post_text/>
        <Register onClick={handleRegister}/>
      </Write_container>
    </>
  )
};

export default Home_write;