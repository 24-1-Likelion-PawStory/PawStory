import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "../components/Fonts.css";
import Communitypost_response from "../components/Communitypost_response";
import Communityread_like_black from '../assets/icons/like_black.png';
import Communityread_like_pink from '../assets/icons/like_pink.png';
import Back from "../components/Back";
import Communityread_dropdown from "../components/Communityread_dropdown";
import Communityread_dropdown2 from "../components/Communityread_dropdown2";
import { CommunityContext } from "../contexts/Community_context";

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

const Communityread_writer_text2 = styled.div`
  height: 1.5rem;
  width: 17.25rem;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-family: "OpenSans";
  font-weight: 400;
`;

const Communityread_writer_text = styled.div`
  height: 1.5rem;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: "OpenSans";
  font-weight: 400;
`;

const Communityread_writer_name = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Communityread_writer_date = styled.div`
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Communityread_post = styled.div`
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
  height: auto;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-family: "OpenSans";
  font-weight: 600;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
`;

const Communityread_post_title_edit = styled.textarea`
  border: none;
  height: auto;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-family: "OpenSans";
  font-weight: 600;
  resize: none;
  overflow: hidden;
  word-wrap: break-word;

  &:focus {
    outline: none;
  }
`;

const Communityread_post_content = styled.div`
  height: auto;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: "OpenSans";
  font-weight: 400;
  word-wrap: break-word;
`;

const Communityread_post_content_edit = styled.textarea`
  border: none;
  height: auto;
  width: 18.75rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: "OpenSans";
  font-weight: 400;
  resize: none;
  overflow: hidden;
  word-wrap: break-word;

  &:focus {
    outline: none;
  }
`;

const Communityread_post_content_edit_button = styled.div`
  width: 18.75rem;
  display: flex;
  justify-content: flex-end;
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
  width: 1.5rem;
  height: 1.5rem;
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
  justify-content: space-between;
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
  font-family: "OpenSans";
  font-weight: 400;
`;

const Communityread_comment_profile_wrapper2 = styled.div`
  padding-top: 0.7rem;
  display: flex;
`;

const Communityread_comment_text = styled.div`
//border:1px solid red;
  height: 1.5rem;
  width: 17.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-family: "OpenSans";
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
  font-family: "OpenSans";
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
  font-family: "OpenSans";
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const Communityread = () => {
  const { posts, addComment, toggleLike, updatePost, deletePost } = useContext(CommunityContext);
  const [community_read_comment, set_community_read_comment] = useState("");
  const [community_read_post, set_community_read_post] = useState({});
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get("id");
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`/community/posts/${postId}`);
        set_community_read_post(response.data);
        setEditedTitle(response.data.title);
        setEditedContent(response.data.content);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`/posts/${postId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPostDetails();
    fetchComments();
  }, [postId]);

  const handle_comment = async () => {
    const newComment = {
      content: community_read_comment,
      user: { user_id: "test1" }
    };

    try {
      const response = await axios.post(`/posts/${postId}/comments`, newComment);
      setComments([...comments, response.data]);
      set_community_read_comment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handle_like = () => {
    toggleLike(Number(postId));
  };

  const handleSave = async () => {
    try {
      const updatedPost = { title: editedTitle, content: editedContent };
      const response = await axios.put(`/community/posts/${postId}`, updatedPost);
      set_community_read_post(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/community/posts/${postId}`);
      deletePost(Number(postId));
      navigate('/community'); // 커뮤니티 메인 페이지로 이동
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Communityread_container>
      <Back />
      <div>
        <Communityread_writer>
          <Communityread_writer_profile />
          <Communityread_writer_text2>
            <Communityread_writer_text>
              <Communityread_writer_name>익명</Communityread_writer_name>
              <Communityread_writer_date>{community_read_post.created_at ? new Date(community_read_post.created_at).toLocaleDateString() : '날짜'}</Communityread_writer_date>
            </Communityread_writer_text>
            <Communityread_dropdown setIsEditing={setIsEditing} postId={Number(postId)} />
          </Communityread_writer_text2>
        </Communityread_writer>
        <Communityread_post>
          <Communityread_post_post>
            {isEditing ? (
              <>
                <Communityread_post_title_edit
                  type="text" 
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)} 
                />
                <Communityread_post_content_edit 
                  value={editedContent} 
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <Communityread_post_content_edit_button>
                  <Communityread_write_comment_post onClick={handleSave}>저장</Communityread_write_comment_post>
                </Communityread_post_content_edit_button>
              </>
            ) : (
              <>
                <Communityread_post_title>{community_read_post.title || '제목'}</Communityread_post_title>
                <Communityread_post_content>{community_read_post.content || '내용'}</Communityread_post_content>
              </>
            )}
          </Communityread_post_post>
          <Communityread_post_response>
            <Communitypost_response />
            <Communityread_response_icon 
              src={community_read_post.liked ? Communityread_like_pink : Communityread_like_black} 
              alt="like" 
              onClick={handle_like} 
            />
          </Communityread_post_response>
        </Communityread_post>
        <Communityread_comment_wrapper>
          {comments.map((comment) => (
            <Communityread_comment_container key={comment.id}>
              <Communityread_comment_profile_wrapper>
                <Communityread_comment_profile_wrapper2>
                  <Communityread_comment_profile />
                  <Communityread_comment_name>익명</Communityread_comment_name>
                </Communityread_comment_profile_wrapper2>
                <Communityread_dropdown2 postId={Number(postId)} commentId={comment.id} />
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
          <Communityread_write_comment_post 
            onClick={handle_comment}
            disabled={!community_read_comment.trim()} // 댓글이 없으면 버튼 비활성화
          >
            등록
          </Communityread_write_comment_post>
        </Communityread_write_comment>
      </Communityread_content>
    </Communityread_container>
  );
};

export default Communityread;