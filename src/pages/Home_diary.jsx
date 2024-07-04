/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import "../components/Fonts.css"
import Back_button from "../components/Back";
import Profile from "../components/Profile";
import Follow from "../components/Follow"
import Info from "../components/Post_info";
import Hr from "../components/Horizon"
import Comment from "../components/Comment"
import Diary_img from "../assets/icons/diary_img.png"

const Diary_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 47.813rem;
  position: absolute;
  top: 2.938rem;
`;

const Post_img = styled.img`
  margin-top: 1.875rem;
  width: 16.75rem;
  height: 16.75rem;
  border-radius: 1.25rem;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
`

const Post_text = styled.div`
  width: 100%;
  height: 1.063rem;
  margin: 0.25rem 0 0 4rem;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
`

const Home_diary = () => {
  const location = useLocation();
  const postData = location.state?.postData || {
    imageUrl: '',
    caption: '',
    username: '',
  };

  return (
    <Diary_container>
      <Back_button/>
      <Post_img src={Diary_img} alt="Post" />
      <Div>
        <Profile/>
        <Follow/>
      </Div>
      <Div>
        <Post_text>
          강아지가 어떻게 왈왈? ㅠ
        </Post_text>
      </Div>
      <Info/>
      <Hr/>
      <Comment/>
    </Diary_container>
  );
};

export default Home_diary;