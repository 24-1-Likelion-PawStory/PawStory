import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import "../components/Fonts.css";
import Communitypost_response from "../components/Communitypost_response";
import Communityread_like_black from '../assets/icons/like_black.png';
import Communityread_like_pink from '../assets/icons/like_pink.png';
import Back from "../components/Back";

const CommunityreadContainer = styled.div`
  width: 23.438rem;
  height: 50.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommunityreadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const CommunityreadWriter = styled.div`
  height: 3.688rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  margin: 0;
`;

const CommunityreadWriterProfile = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
`;

const CommunityreadWriterText = styled.div`
  height: 1.5rem;
  width: 17.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const CommunityreadWriterName = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CommunityreadWriterDate = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CommunityreadPost = styled.div`
  height: 11rem;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;

const CommunityreadPostPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommunityreadPostTitle = styled.div`
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const CommunityreadPostContent = styled.div`
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const CommunityreadPostResponse = styled.div`
  border-bottom: 0.019rem solid #d9d9d9;
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityreadResponseIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  cursor: pointer;
`;

const CommunityreadCommentWrapper = styled.div`
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

const CommunityreadCommentContainer = styled.div`
  border-bottom: 0.019rem solid #d9d9d9;
  width: 18.75rem;
  height: 4.125rem;
  min-height: 4.125rem;
`;

const CommunityreadCommentProfileWrapper = styled.div`
  padding-top: 0.7rem;
  display: flex;
`;

const CommunityreadCommentProfile = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
`;

const CommunityreadCommentName = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 0.625rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const CommunityreadCommentText = styled.div`
  height: 1.5rem;
  width: 17.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const CommunityreadWriteComment = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CommunityreadWriteCommentComment = styled.input`
  border: 0.063rem solid #d9d9d9;
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
    color: #d9d9d9;
  }
  &:focus {
    outline: none;
  }
`;

const CommunityreadWriteCommentPost = styled.button`
  border: 0.063rem solid #ffaa2f;
  background-color: #ffaa2f;
  height: 1.813rem;
  width: 2.75rem;
  border-radius: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const Communityread = () => {
  const [community_read_post, set_community_read_post] = useState({});
  const [community_read_comment, set_community_read_comment] = useState("");
  const [community_read_liked, set_community_read_liked] = useState(false);
  const location = useLocation();
  const { post_id } = location.state || {};  // post_id 받아오기

  useEffect(() => {
    const fetch_post = async () => {
      try {
        const response = await axios.get(`https://your-api-endpoint/posts/${post_id}`);
        set_community_read_post(response.data);
        // 좋아요 상태 업데이트
        set_community_read_liked(response.data.liked_by_user);  // 서버에서 받아온 데이터에 따라 초기화
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (post_id) {
      fetch_post();
    }
  }, [post_id]);

  const handle_comment = async () => {
    try {
      await axios.post(`https://your-api-endpoint/posts/${post_id}/comments`, {
        content: community_read_comment,
        user_id: 2,  // 댓글을 단 사용자의 ID
      });

      // 댓글 입력 후, 댓글 개수를 다시 fetch하여 업데이트
      const response = await axios.get(`https://your-api-endpoint/posts/${post_id}`);
      set_community_read_post(response.data);

      // 댓글 입력란 비우기
      set_community_read_comment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handle_like = async () => {
    try {
      // 좋아요 상태 업데이트
      const response = await axios.post(`https://your-api-endpoint/posts/${post_id}/like`, {
        user_id: 2,  // 좋아요를 누른 사용자의 ID
      });
      
      // 좋아요 개수 업데이트
      set_community_read_post(prevPost => ({
        ...prevPost,
        likes: response.data.likes,
      }));

      // 좋아요 토글
      set_community_read_liked(prevLiked => !prevLiked);
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <CommunityreadContainer>
      <Back />
      <div>
        <CommunityreadWriter>
          <CommunityreadWriterProfile />
          <CommunityreadWriterText>
            <CommunityreadWriterName>{community_read_post.user?.user_id || '익명'}</CommunityreadWriterName>
            <CommunityreadWriterDate>{new Date(community_read_post.created_at).toLocaleDateString() || '날짜'}</CommunityreadWriterDate>
          </CommunityreadWriterText>
        </CommunityreadWriter>
        <CommunityreadPost>
          <CommunityreadPostPost>
            <CommunityreadPostTitle>{community_read_post.title || '제목'}</CommunityreadPostTitle>
            <CommunityreadPostContent>{community_read_post.content || '내용'}</CommunityreadPostContent>
          </CommunityreadPostPost>
          
          <CommunityreadPostResponse>
            <Communitypost_response />
            <CommunityreadResponseIcon 
              src={community_read_liked ? Communityread_like_pink : Communityread_like_black} 
              alt="like" 
              onClick={handle_like} 
            />
          </CommunityreadPostResponse>
        </CommunityreadPost>
        <CommunityreadCommentWrapper>
          {community_read_post.comments && community_read_post.comments.map((comment, index) => (
            <CommunityreadCommentContainer key={index}>
              <CommunityreadCommentProfileWrapper>
                <CommunityreadCommentProfile />
                <CommunityreadCommentName>{comment.user?.user_id || '익명'}</CommunityreadCommentName>
              </CommunityreadCommentProfileWrapper>
              <CommunityreadCommentText>
                {comment.content}
              </CommunityreadCommentText>
            </CommunityreadCommentContainer>
          ))}
        </CommunityreadCommentWrapper>
      </div>
      <CommunityreadContent>
        <CommunityreadWriteComment>
          <CommunityreadWriteCommentComment 
            placeholder="댓글을 입력해 주세요."
            value={community_read_comment}
            onChange={(e) => set_community_read_comment(e.target.value)}
          />
          <CommunityreadWriteCommentPost onClick={handle_comment}>
            등록
          </CommunityreadWriteCommentPost>
        </CommunityreadWriteComment>
      </CommunityreadContent>
    </CommunityreadContainer>
  );
};

export default Communityread;



