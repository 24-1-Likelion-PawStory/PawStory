/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { styled } from 'styled-components';
import Card from "../components/Card";
import Underbar from "../components/Underbar";
import post_button from "../assets/icons/post_button.png"
import Hr from "../components/Horizon"
import axiosInstance from "../axios";

const Loginhome_container =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50.75rem;
`

const Loginhome_images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 41.688rem;
  width: 100%;
  margin-top: 4.875rem;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, and Opera */
  }
`;

const Loginhome_post = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 6rem;
  width: 100%;
  position: fixed;
  bottom: 4.188rem;
`

const Loginhome_post_button = styled.img`
  margin: 0 1.188rem 0 0;
  width: 3.25rem;
  height: 3.25rem;
  cursor: pointer;
`

const Loginhome = () => {
  const [home_post, set_home_post] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    axiosInstance
      .get(`diaries/diary`)
      .then((res) => {
        console.log(res)
        set_home_post(res.data.data); // 데이터를 상태에 저장
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const navigate_to_post = () => {
    navigate("./post")
  }

  return (
    <>
      <Loginhome_container>
        <Loginhome_images>
          {/* {home_post.map((user) => (
              <>
                <Card
                key={user.id}
                id={user.id}
                img={user.avatar}
                />
                <Hr/>
              </>
            ))} */}
        </Loginhome_images>
        <Loginhome_post>
          <Loginhome_post_button
            src={post_button}
            alt="post"
            onClick={navigate_to_post}
          />
        </Loginhome_post>
        <Underbar />
      </Loginhome_container>
    </>
  );
};

export default Loginhome;