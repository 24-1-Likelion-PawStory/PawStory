/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import underbar_community_icon_black from '../assets/icons/community_icon_black.png'; 
import underbar_community_icon_gray from '../assets/icons/community_icon_gray.png'; 
import underbar_loginhome_icon_black from '../assets/icons/loginhome_icon_black.png'; 
import underbar_loginhome_icon_gray from '../assets/icons/loginhome_icon_gray.png'; 
import underbar_myhome_icon_black from '../assets/icons/myhome_icon_black.png';
import underbar_myhome_icon_gray from '../assets/icons/myhome_icon_gray.png';

const Underbar_wrapper = styled.div`
  width: 23.438rem;
  height: 4.188rem;
  border-top: 0.019rem solid #D9D9D9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 1000;
`;

const Underbar_icon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const Underbar = () => {
  const navigate = useNavigate();
  const underbar_location = useLocation();
  const [underbar_selected, underbar_set_selected] = useState("");

  useEffect(() => {
    underbar_set_selected(underbar_location.pathname);
  }, [underbar_location.pathname]);

  const underbar_handle_navigation = (path) => {
    navigate(path);
  };

  return (
    <Underbar_wrapper>
      <Underbar_icon
        src={underbar_selected === "/community" ? underbar_community_icon_black : underbar_community_icon_gray}
        alt="Community"
        onClick={() => underbar_handle_navigation("/community")}
      />
      <Underbar_icon
        src={underbar_selected === "/home" ? underbar_loginhome_icon_black : underbar_loginhome_icon_gray}
        alt="Login Home"
        onClick={() => underbar_handle_navigation("/home")}
      />
      <Underbar_icon
        src={underbar_selected === "/my" ? underbar_myhome_icon_black : underbar_myhome_icon_gray}
        alt="My Home"
        onClick={() => underbar_handle_navigation("/my")}
      />
    </Underbar_wrapper>
  );
};

export default Underbar;
