/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import "./Fonts.css";
import Comment from "../assets/icons/comment_button.png"
import Like from '../assets/icons/like_pink.png'
import Unlike from '../assets/icons/like_black.png'

const Info_container = styled.div`
  display: flex;
  width: 100%;
  margin: 0.75rem 0;
`;

const Div = styled.div`
  display: flex;
  margin-left: 4rem;
`

const Icon_container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
`;

const Count = styled.span`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  color: #000000;
`;

const Like_btn = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin-left: 5.188rem;
`

const Post_info = ({ likeCount, commentCount, isLiked, onLike }) => {
  return (
    <Info_container>
      <Div>
        <Icon_container>
          <Icon src={Like} alt="likes" />
          <Count>{likeCount}개</Count>
        </Icon_container>
        <Icon_container>
          <Icon src={Comment} alt="comments" />
          <Count>{commentCount}개</Count>
        </Icon_container>
      </Div>
      <Like_btn
        src={isLiked ? Like : Unlike}
        alt={isLiked ? "unlike" : "like"}
        onClick={onLike}
      />
    </Info_container>
  );
};

export default Post_info;