/* eslint-disable react/jsx-pascal-case */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../components/Fonts.css"
import Back_button from "../components/Back";
import Profile from "../components/Profile";
import Follow from "../components/Follow"
import Info from "../components/Post_info";
import Hr from "../components/Horizon"
import Comment, { Profile_container, Userimg, Username, Comment_txt } from "../components/Comment"
import { DiaryContext } from "../contexts/Diary_context.js";

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
  const { diaries, addDiary, addComment, toggleLike } = useContext(DiaryContext);
  const location = useLocation();
  const [diaryData, setDiaryData] = useState(null);
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchDiaryData = async () => {
      try {
        const diaryId = location.state?.postData?.id || localStorage.getItem('diaryId');
        const response = await axios.get(`https://pawstory.p-e.kr/diaries/diary/${diaryId}/`);
        setDiaryData(response.data);
        setComments(response.data.comments || []);
        setLikeCount(response.data.like_count);
        setIsLiked(response.data.is_liked); // 백엔드에서 현재 사용자가 좋아요를 눌렀는지 여부를 제공한다고 가정
        addDiary(response.data);
      } catch (error) {
        console.error("Error fetching diary data:", error);
      }
    };

    fetchDiaryData();
  }, [location.state, addDiary]);

  const handleAddComment = async (newComment) => {
    try {
      const diaryId = diaryData.id;
      const response = await axios.post(`https://pawstory.p-e.kr/diaries/diary/${diaryId}/comments`, {
        content: newComment
      });
      setComments([...comments, response.data]);
      addComment(diaryId, response.data);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleLike = async () => {
    try {
      const diaryId = diaryData.id;
      const response = await axios.put(`https://pawstory.p-e.kr/diaries/diary/${diaryId}/like`);
      setLikeCount(response.data.like_count);
      setIsLiked(!isLiked);
      toggleLike(diaryId);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <Diary_container>
      <Back_button/>
      <Post_img src={diaryData.photo} alt="Post" />
      <Div>
        <Profile/>
        <Follow/>
      </Div>
      <Div>
        <Post_text>
          {diaryData.content}
        </Post_text>
      </Div>
      <Info
        likeCount={likeCount} 
        commentCount={comments.length} 
        isLiked={isLiked} 
        onLike={handleLike}
      />
      <Hr/>
      <CommentSection>
        <CommentList>
          {comments.map((comment, index) => (
            <CommentItem key={index}>
              <Profile_container>
                <Userimg/>
                <Username>{comment.member.user_id || 'Anonymous'}</Username>
              </Profile_container>
              <Comment_txt>
                {comment.content}
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