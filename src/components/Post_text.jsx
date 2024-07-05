/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { styled } from 'styled-components';
import Video from '../assets/icons/video.png'
import "./Fonts.css";

const Text_wrapper = styled.div`
  display: flex;
  width: 19.875rem;
  height: 18.813rem;
  margin: 0.125rem 1.781rem;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0.063rem solid #FFD18E;
  border-radius: 1.25rem;
`;

const Post_txt_container = styled.div`
  width: 16.875rem;
  height: 15.625rem;
  margin: 0.813rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  border: none;
  background-color: transparent;
  resize: none;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;
  color: #000000;
  &:focus {
    outline: none;
  }
`;

const CharCount = styled.div`
  text-align: right;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;
  color: #C4C4C4;
`;

const Button = styled.button`
  width: auto;
  height: auto;
  padding: 0.3rem 0.4rem;
  margin: 0 auto;
  background-color: #FFFFFF;
  color: #000000;
  border: 0.063rem solid #000000;
  border-radius: 1.25rem;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.25rem;
`;

const Post_text = ({ formData, onTextChange }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 100) {
      setText(newText);
      onTextChange(newText);
    }
  };

  return (
    <Text_wrapper>
      <Post_txt_container>
        <TextArea 
            value={text}
            onChange={handleTextChange}
            placeholder="사진에 대한 일기를 기록해주세요."
            maxLength={100}
          />
          <CharCount>{text.length} / 100</CharCount>
          <Button>
            <VideoIcon src={Video} alt="video" />
            광고 보고 글자 수 늘리기
          </Button>
      </Post_txt_container>
    </Text_wrapper>
  );
}

export default Post_text;