import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Communityread_dropdown_ellipsis from '../assets/icons/ellipsis.png';
import { CommunityContext } from '../contexts/Community_context';
import axios from 'axios';
const Communityread_dropdown_container = styled.div`
  width: 4rem;
  height: 1.5rem;
  position: relative;
  display: inline-block;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communityread_dropdown_button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Communityread_dropdown_icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding-left: 1.5rem;
`;

const Communityread_dropdown_content = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
`;

const Communityread_dropdown_item = styled.div`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Communityread_dropdown = ({ setIsEditing, postId }) => {
  const [dropdown_show, set_dropdown_show] = useState(false);
  const { deletePost } = useContext(CommunityContext);
  const navigate = useNavigate();

  const toggle_dropdown = () => {
    set_dropdown_show(!dropdown_show);
  };

  const handle_edit = () => {
    setIsEditing(true);
    set_dropdown_show(false);
  };

  const handle_delete = async () => {
    try {
      await axios.delete(`/community/posts/${postId}`);
      deletePost(postId);
      set_dropdown_show(false);
      navigate('/community');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Communityread_dropdown_container>
      <Communityread_dropdown_button onClick={toggle_dropdown}>
        <Communityread_dropdown_icon src={Communityread_dropdown_ellipsis} alt="Menu" />
      </Communityread_dropdown_button>
      <Communityread_dropdown_content show={dropdown_show}>
        <Communityread_dropdown_item onClick={handle_edit}>수정</Communityread_dropdown_item>
        <Communityread_dropdown_item onClick={handle_delete}>삭제</Communityread_dropdown_item>
      </Communityread_dropdown_content>
    </Communityread_dropdown_container>
  );
};

export default Communityread_dropdown;



