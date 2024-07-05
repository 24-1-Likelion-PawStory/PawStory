import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Communityread_like_pink from '../assets/icons/like_pink.png';
import Communityread_comment_button from '../assets/icons/comment_button.png';

const Communitypost_response_set = styled.div`
  display: flex;
  align-items: center;
`;

const Communitypost_response_set2 = styled.div`
  width: 5rem;
  display: flex;
  align-items: center;
`;

const Communitypost_response_icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
`;

const Communitypost_response_num = styled.div`
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Communitypost_response = ({ likeCount, commentCount }) => {
  return (
    <>
      <Communitypost_response_set>
        <Communitypost_response_set2>
          <Communitypost_response_icon src={Communityread_like_pink} alt="like" />
          <Communitypost_response_num>{likeCount}</Communitypost_response_num>
        </Communitypost_response_set2>
        <Communitypost_response_icon src={Communityread_comment_button} alt="comment" />
        <Communitypost_response_num>{commentCount}</Communitypost_response_num>
      </Communitypost_response_set>
    </>
  );
};

export default Communitypost_response;


