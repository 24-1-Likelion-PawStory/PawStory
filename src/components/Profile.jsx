/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import "./Fonts.css";

const Profile_container = styled.div`
  display: flex;
  width: 50%;
  margin: 0.813rem 0;
`;

const Userimg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5.625rem;
  background-color: #D9D9D9;
  margin: 0 0.5rem 0 3.813rem;
`

const Username = styled.span`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  align-content: center;
`;

const Profile = () => {
  return (
    <Profile_container>
      <Userimg/>
      <Username>huru_bichon</Username>
    </Profile_container>
  );
};

export default Profile;