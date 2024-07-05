import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import "../components/Fonts.css";
import Communitypost_response from "../components/Communitypost_response";
import Communityread_like_black from '../assets/icons/like_black.png';
import Communityread_like_pink from '../assets/icons/like_pink.png';
import Back from "../components/Back";

const Communityread_container = styled.div`
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
  height: 3.688rem;
  width: 18.75rem;
  display: flex;
  align-items: center;
  margin: 0;
`;

const Communityread_writer_profile = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
`;

const Communityread_writer_text = styled.div`
  border: 1px solid black;
  height: 1.5rem;
  width: 17.25rem;
  padding-left:0.5rem;
  display:flex;
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
  padding-left:0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Communityread_post = styled.div`
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
  border-bottom: 0.019rem solid #d9d9d9;
  height: 2.063rem;
  width: 18.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Communityread_response_icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  cursor: pointer;
`;

const Communityread_comment_wrapper = styled.div`
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
  border-bottom: 0.019rem solid #d9d9d9;
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
  background-color: #d9d9d9;
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

const Communityread_write_comment = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Communityread_write_comment_comment = styled.input`
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

const Communityread_write_comment_post = styled.button`
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
    <Communityread_container>
      <Back />
      <div>
        <Communityread_writer>
          <Communityread_writer_profile />
          <Communityread_writer_text>
            <Communityread_writer_name>{community_read_post.user?.user_id || '익명'}</Communityread_writer_name>
            <Communityread_writer_date>{new Date(community_read_post.created_at).toLocaleDateString() || '날짜'}</Communityread_writer_date>
          </Communityread_writer_text>
        </Communityread_writer>
        <Communityread_post>
          <Communityread_post_post>
            <Communityread_post_title>{community_read_post.title || '제목'}</Communityread_post_title>
            <Communityread_post_content>{community_read_post.content || '내용'}</Communityread_post_content>
          </Communityread_post_post>
          
          <Communityread_post_response>
            <Communitypost_response />
            <Communityread_response_icon 
              src={community_read_liked ? Communityread_like_pink : Communityread_like_black} 
              alt="like" 
              onClick={handle_like} 
            />
          </Communityread_post_response>
        </Communityread_post>
        <Communityread_comment_wrapper>
          {community_read_post.comments && community_read_post.comments.map((comment, index) => (
            <Communityread_comment_container key={index}>
              <Communityread_comment_profile_wrapper>
                <Communityread_comment_profile />
                <Communityread_comment_name>{comment.user?.user_id || '익명'}</Communityread_comment_name>
              </Communityread_comment_profile_wrapper>
              <Communityread_comment_text>
                {comment.content}
              </Communityread_comment_text>
            </Communityread_comment_container>
          ))}
        </Communityread_comment_wrapper>
      </div>
      <Communityread_content>
        <Communityread_write_comment>
          <Communityread_write_comment_comment 
            placeholder="댓글을 입력해 주세요."
            value={community_read_comment}
            onChange={(e) => set_community_read_comment(e.target.value)}
          />
          <Communityread_write_comment_post onClick={handle_comment}>
            등록
          </Communityread_write_comment_post>
        </Communityread_write_comment>
      </Communityread_content>
    </Communityread_container>
  );
};

export default Communityread;



