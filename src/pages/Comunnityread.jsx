import React, { useState } from "react";
import Back from "../components/Back";
import { styled } from "styled-components";
import "../components/Fonts.css";
import Communityread_like_black from '../assets/icons/like_black.png';
import Communityread_like_pink from '../assets/icons/like_pink.png';
import Communityread_comment_button from '../assets/icons/comment_button.png';

const Communityread_container = styled.div`
  //border: 2px solid blue;
  width: 23.438rem;
  height: 50.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Communityread_content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Communityread_writer = styled.div`
  //border: 2px solid purple;
  height: 3.688rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  margin: 0;
`;

const Communityread_writer_profile = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #D9D9D9;
  border-radius: 1rem;
`;

const Communityread_writer_text = styled.div`
  height: 1.5rem;
  width: 17.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communityread_writer_name = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Communityread_writer_date = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Communityread_post = styled.div`
  //border: 2px solid purple;
  height: 11rem;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;

const Communityread_post_post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Communityread_post_title = styled.div`
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const Communityread_post_content = styled.div`
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communityread_post_response = styled.div`
  //border: 2px solid black;
  border-bottom: 0.019rem solid #D9D9D9;
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Communityread_response_set = styled.div`
  display: flex;
  align-items: center;
`;

const Communityread_response_set2 = styled.div`
  width: 5rem;
  display: flex;
  align-items: center;
`;

const Communityread_response_icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
`;

const Communityread_response_num = styled.div`
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communityread_comment_wrapper = styled.div`
  //border: 2px solid red;
  width: 18.75rem;
  height: 24.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Communityread_comment_container = styled.div`
  border-bottom: 0.019rem solid #D9D9D9;
  width: 18.75rem;
  height: 4.125rem;
  min-height: 4.125rem;
`;

const Communityread_comment_profile_wrapper = styled.div`
  padding-top: 0.7rem;
  display: flex;
`;

const Communityread_comment_profile = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  background-color: #D9D9D9;
  border-radius: 1rem;
`;

const Communityread_comment_name = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 0.625rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communityread_comment_text = styled.div`
  height: 1.5rem;
  width: 17.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communityread_writecomment = styled.div`
  //border: 2px solid purple;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Communityread_writecomment_comment = styled.input`
  border: 0.063rem solid #D9D9D9;
  height: 1.5rem;
  width: 14.188rem;
  padding-left: 1rem;
  border-radius: 0.9rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;

  &::placeholder {
    color: #D9D9D9; /* 원하는 색상으로 변경 */
  }
  &:focus {
    outline: none; /* 기본 outline 제거 */
  }
`;

const Communityread_writecomment_post = styled.button`
  border: 0.063rem solid #FFAA2F;
  background-color:#FFAA2F;
  height: 1.813rem;
  width: 2.75rem;
  border-radius: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 600;
  color:white;
  cursor: pointer;
`;

const Communityread = () => {
  const [communityread_comment, communityread_set_comment] = useState("");

  const communityread_handle_comment = (e) => {
    communityread_set_comment(e.target.value);
  };

  const communityread_handle_comment_post = () => {


    communityread_set_comment(""); // 댓글 입력란 비우기
  };

  return (
    <Communityread_container>
      <Back />
      <div>
        <Communityread_writer>
          <Communityread_writer_profile />
          <Communityread_writer_text>
            <Communityread_writer_name>익명</Communityread_writer_name>
            <Communityread_writer_date>날짜</Communityread_writer_date>
          </Communityread_writer_text>
        </Communityread_writer>
        <Communityread_post>
          <Communityread_post_post>
            <Communityread_post_title>멍멍어쩌구</Communityread_post_title>
            <Communityread_post_content>강아지가어떻게왈왈</Communityread_post_content>
          </Communityread_post_post>
          <Communityread_post_response>
            <Communityread_response_set>
              <Communityread_response_set2>
                <Communityread_response_icon src={Communityread_like_pink} alt="like" />
                <Communityread_response_num>몇개</Communityread_response_num>
              </Communityread_response_set2>
              <Communityread_response_icon src={Communityread_comment_button} alt="comment" />
              <Communityread_response_num>몇개</Communityread_response_num>
            </Communityread_response_set>
            <Communityread_response_icon src={Communityread_like_black} alt="like" />
          </Communityread_post_response>
        </Communityread_post>
        <Communityread_comment_wrapper>
          <Communityread_comment_container>
            <Communityread_comment_profile_wrapper>
              <Communityread_comment_profile />
              <Communityread_comment_name>익명 몇번째</Communityread_comment_name>
            </Communityread_comment_profile_wrapper>
            <Communityread_comment_text>
              어쩌구
            </Communityread_comment_text>
          </Communityread_comment_container>
        </Communityread_comment_wrapper>
      </div>
      <Communityread_content>
        <Communityread_writecomment>
          <Communityread_writecomment_comment 
            placeholder="댓글을 입력해 주세요."
            value={communityread_comment}
            onChange={communityread_handle_comment}
          />
          <Communityread_writecomment_post onClick={communityread_handle_comment_post}>
            등록
          </Communityread_writecomment_post>
        </Communityread_writecomment>
      </Communityread_content>
    </Communityread_container>
  );
};

export default Communityread;

