/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import "../components/Fonts.css"
import Back_button from "../components/Back";

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
      <Post_img src={postData.imageUrl} alt="Post" />
    </Diary_container>
  );
};

export default Home_diary;