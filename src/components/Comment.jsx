/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import "./Fonts.css";

const Profile_container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
`;

const Userimg = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 5.625rem;
  background-color: #D9D9D9;
  margin: 0 0.438rem 0 4rem;
`

const Username = styled.span`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.625rem;
  align-content: center;
`;

const Comment_txt = styled.div`
  width: 12.5rem;
  height: auto;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  margin: 0.625rem 2rem 0 0;
`

const Comment = () => {
  return (
    <>
      <Profile_container>
        <Userimg/>
        <Username>taein_0926</Username>
      </Profile_container>
      <Comment_txt>
        후루 내심장을가져가도좋아
      </Comment_txt>
    </>
  );
};

export default Comment;