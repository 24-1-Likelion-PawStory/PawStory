/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import "../components/Fonts.css"
import Back_button from "../components/Back";
import Profile from "../components/Profile";
import Follow from "../components/Follow"
import Info from "../components/Post_info";
import Hr from "../components/Horizon"
import Comment, { Profile_container, Userimg, Username, Comment_txt } from "../components/Comment"

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
  width: 70%;
  height: auto;
  margin: 0.25rem 0 0 4rem;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
`

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 11.25rem;
`;

const CommentList = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;
`;

const FixedCommentInput = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0;
`;

const Home_diary = () => {
  const location = useLocation();
  const { imageUrl, caption } = location.state?.postData || {
    imageUrl: '',
    caption: '',
  };

  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments(prevComments => [...prevComments, newComment]);
  };

  return (
    <Diary_container>
      <Back_button/>
      <Post_img src={imageUrl} alt="Post" />
      <Div>
        <Profile/>
        <Follow/>
      </Div>
      <Div>
        <Post_text>
          {caption}
        </Post_text>
      </Div>
      <Info/>
      <Hr/>
      <CommentSection>
        <CommentList>
          {comments.map((comment, index) => (
            <CommentItem key={index}>
              <Profile_container>
                <Userimg/>
                <Username>{comment.username || 'Anonymous'}</Username>
              </Profile_container>
              <Comment_txt>
                {comment.commentBody}
              </Comment_txt>
              <Hr/>
            </CommentItem>
          ))}
        </CommentList>
      </CommentSection>
      <FixedCommentInput>
        <Comment onAddComment={handleAddComment} />
      </FixedCommentInput>
    </Diary_container>
  );
};

export default Home_diary;