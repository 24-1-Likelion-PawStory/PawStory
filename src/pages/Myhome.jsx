import React, { useEffect, useState } from "react";
import axios from "axios";
import Underbar from "../components/Underbar";
import Card from "../components/Card";
import { styled } from "styled-components";
import "../components/Fonts.css"

const Myhome_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 46.562rem; // Underbar 높이를 뺀 나머지에서 일기
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, and Opera */
  }
`;

const Myhome_profile_img =styled.img`
  width: 8.625rem;
  height: 8.625rem;
  border-radius: 4rem;
`;

const Myhome_profile_container = styled.div`
  padding-top:3.938rem;
  width: 23.438rem;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Myhome_profile_info_container = styled.div`
  border-bottom: 0.019rem solid #D9D9D9;
  width: 16.75rem;
  padding-top:1.563rem;
  padding-bottom:0.813rem;
  display: flex;
  justify-content: space-between;
`;

const Myhome_profile_info_name = styled.div`
  font-size: 1.063rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const Myhome_profile_info = styled.div`
  background-color: #FEF7D3;
  width: 4.063rem;
  height: 4.563rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const Myhome_profile_num = styled.div`
  width: 2.063rem;
  height: 2.563rem;
  padding-top:0.25rem;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const Myhome = () => {
  const [myhome_user_info1, myhome_set_user_info1] = useState({});
  const [myhome_user_info2, myhome_set_user_info2] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // 로컬 스토리지에서 사용자 ID 가져오기

    axios
      .get(`http://3.39.150.64/accounts/${userId}`)
      .then((res) => {
        myhome_set_user_info1(res.data); // 데이터를 상태에 저장
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://3.39.150.64/diaries/diary`)
      .then((res) => {
        myhome_set_user_info2(res.data); // 데이터를 상태에 저장
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Myhome_container>
        <Myhome_profile_container>
          <Myhome_profile_img src={myhome_user_info1.pet_photo} />
          <Myhome_profile_info_name>
            {myhome_user_info1.user_id}
          </Myhome_profile_info_name>
          <Myhome_profile_info_container>
            <Myhome_profile_info>
              Diary
              <Myhome_profile_num>{myhome_user_info1.post_count}</Myhome_profile_num>
            </Myhome_profile_info>
            <Myhome_profile_info>
              Followers
              <Myhome_profile_num>{myhome_user_info1.follower_count}</Myhome_profile_num>
            </Myhome_profile_info>
            <Myhome_profile_info>
              Following
              <Myhome_profile_num>{myhome_user_info1.following_count}</Myhome_profile_num>
            </Myhome_profile_info>
          </Myhome_profile_info_container>
        </Myhome_profile_container>

        {myhome_user_info2.map((diary) => (
          <Card
            key={diary.id}
            id={diary.id}
            img={diary.photo}
          />
        ))}
      </Myhome_container>
      <Underbar />
    </>
  );
};

export default Myhome;
