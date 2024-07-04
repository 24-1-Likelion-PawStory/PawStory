/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import styled from 'styled-components';
import Follow from '../assets/icons/follow.png'
import Unfollow from '../assets/icons/unfollow.png'

const Follow_container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin: 0.813rem 0;
`;

const Follow_btn = styled.img`
  width: 4.25rem;
  height: 1.313rem;
  margin-right: 3.75rem;
  cursor: pointer;
`;

const Profile = () => {
  const [is_follow, set_is_follow] = useState(false);
  const handle_follow = () => {
    set_is_follow(!is_follow);
  }

  return (
    <Follow_container>
      <Follow_btn
        src={is_follow ? Unfollow : Follow}
        alt={is_follow ? "unfollow" : "follow"}
        onClick={handle_follow}
      />
    </Follow_container>
  );
};

export default Profile;