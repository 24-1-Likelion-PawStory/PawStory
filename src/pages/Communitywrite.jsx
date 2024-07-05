import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";
import { styled } from "styled-components";
import "../components/Fonts.css";
import Communitybutton from "../components/Communitybutton";
import { CommunityContext } from "../contexts/Community_context";

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
  const [communitywrite_active_button, communitywrite_set_active_button] = useState(""); // 태그
  const [clicked, setClicked] = useState(false); // 버튼 클릭 상태
  const [communitywrite_title, communitywrite_set_title] = useState(""); // 제목 입력란
  const [communitywrite_content, communitywrite_set_content] = useState("");// 본문 입력란

  const communitywrite_handle_button_click = (communitywrite_button_text) => { // 태그
    communitywrite_set_active_button(communitywrite_button_text);
  };

  const communitywrite_handle_title = (e) => {
    communitywrite_set_title(e.target.value);
  };

  const communitywrite_handle_content = (e) => {
    communitywrite_set_content(e.target.value);
  };

  const communitywrite_handle_share_click = () => {
    setClicked(prevState => !prevState); // 클릭 상태 토글

    const newPost = {
      id: Date.now(), // 임시 ID 생성
      title: communitywrite_title,
      content: communitywrite_content,
      tag: {
        name: communitywrite_active_button,
        part: "TOG"
      },
      user: {
        id: 2,
        user_id: "test1",
        pet_photo: null
      }
    };

    addPost(newPost);
    communitywrite_set_title(""); // 제목 입력란 비우기
    communitywrite_set_content(""); // 본문 입력란 비우기
    communitywrite_set_active_button(""); // 태그 초기화
    navigate('/community'); // Community 페이지로 이동
  };

  const community_buttons = ["같이해요", "궁금해요", "정보공유", "일상공유"];

  return (
    <>
      <Communitywrite_container>
        <Back />
        <Communitywrite_title>
          분류
        </Communitywrite_title>
        <Communitywrite_tag>
          {community_buttons.map((text) => (
            <Communitybutton
              key={text}
              text={text}
              active={communitywrite_active_button === text}
              onClick={() => communitywrite_handle_button_click(text)}
            />
          ))}
        </Communitywrite_tag>
        <Communitywrite_title>
          제목
          <Communitywrite_write_title
            placeholder="제목을 입력해 주세요."
            value={communitywrite_title}
            onChange={communitywrite_handle_title} />
        </Communitywrite_title>
        <Communitywrite_write_content
          placeholder="본문을 입력해 주세요."
          value={communitywrite_content}
          onChange={communitywrite_handle_content}
        />
        <Communitywrite_share 
          clicked={clicked} // 상태를 props로 전달
          onClick={communitywrite_handle_share_click} // 클릭 핸들러 추가
        >
          공유
        </Communitywrite_share>
      </Communitywrite_container>
    </>
  );
};

export default Communitywrite;

