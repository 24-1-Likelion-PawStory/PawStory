import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../components/Fonts.css";
import Back from "../components/Back";
import Communitybutton from "../components/Communitybutton";
import { CommunityContext } from "../contexts/Community_context";
import axiosInstance from "../axios";

const Communitywrite_container = styled.div`
  width: 23.438rem;
  height: 50.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Communitywrite_title = styled.div`
  height: 3rem;
  width: 19.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const Communitywrite_tag = styled.div`
  height: 1.5rem;
  width: 19.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Communitywrite_write_title = styled.input`
  border: 0.031rem solid #C4C4C4;
  height: 1.5rem;
  width: 15.2rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;

  &::placeholder {
    color: #D9D9D9;
    font-size: 0.75rem;
    font-family: 'OpenSans';
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
`;

const Communitywrite_write_content = styled.textarea`
  border: 0.031rem solid #C4C4C4;
  height: 24.375rem;
  width: 17.8rem;
  margin-top: 2rem;
  border-radius: 0.6rem;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
  padding: 0.75rem 1rem;
  resize: none;

  &::placeholder {
    color: #D9D9D9;
    padding-left: 0;
    padding-top: 0;
    font-size: 0.75rem;
    font-family: 'OpenSans';
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Communitywrite_share = styled.button`
  border: 2px solid #FFAA2F;
  border-radius: 0.6rem;
  background-color: ${props => props.clicked ? '#FFAA2F' : 'transparent'};
  height: 2.625rem;
  width: 19.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: 'OpenSans';
  font-weight: 700;
  color: ${props => props.clicked ? '#fff' : '#FFAA2F'};
  cursor: pointer;
`;

const Communitywrite = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(CommunityContext);
  const [activeButton, setActiveButton] = useState(""); // 태그
  const [clicked, setClicked] = useState(false); // 버튼 클릭 상태
  const [title, setTitle] = useState(""); // 제목 입력란
  const [content, setContent] = useState(""); // 본문 입력란

  const handleButtonClick = (buttonText) => { // 태그
    setActiveButton(buttonText);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleShareClick = async () => {
    setClicked(prevState => !prevState); // 클릭 상태 토글

    const newPost = {
      title: title,
      content: content,
      tag: activeButton,
      // user 정보를 여기서 제거합니다.
    };

    console.log("New Post Data:", newPost); // 요청 데이터 로그

    try {
      const response = await axiosInstance.post("community/posts/create", newPost);
      addPost(response.data.data); // 서버로부터 반환된 데이터를 추가
      setTitle(""); // 제목 입력란 비우기
      setContent(""); // 본문 입력란 비우기
      setActiveButton(""); // 태그 초기화
      navigate('/community'); // Community 페이지로 이동
    } catch (error) {
      console.error("Error creating post:", error);
      console.error("Response data:", error.response?.data); // 서버 응답 로그
    }
  };

  const communityButtons = ["같이해요", "궁금해요", "정보공유", "일상공유"];

  return (
    <Communitywrite_container>
      <Back />
      <Communitywrite_title>분류</Communitywrite_title>
      <Communitywrite_tag>
        {communityButtons.map((text) => (
          <Communitybutton
            key={text}
            text={text}
            active={activeButton === text}
            onClick={() => handleButtonClick(text)}
          />
        ))}
      </Communitywrite_tag>
      <Communitywrite_title>
        제목
        <Communitywrite_write_title
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={handleTitleChange}
        />
      </Communitywrite_title>
      <Communitywrite_write_content
        placeholder="본문을 입력해 주세요."
        value={content}
        onChange={handleContentChange}
      />
      <Communitywrite_share 
        clicked={clicked} // 상태를 props로 전달
        onClick={handleShareClick} // 클릭 핸들러 추가
      >
        공유
      </Communitywrite_share>
    </Communitywrite_container>
  );
};

export default Communitywrite;



