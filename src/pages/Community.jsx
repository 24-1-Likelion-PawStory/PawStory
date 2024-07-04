import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Underbar from "../components/Underbar";
import { styled } from "styled-components";
import "../components/Fonts.css";
import Communitybutton from "../components/Communitybutton";
import post_button from "../assets/icons/post_button.png";

const Community_container = styled.div`
  //border: 2px solid blue;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 46.562rem; // Underbar 높이를 뺀 나머지에서 일기
  position: relative; /* 추가 */
`;

const Community_top_container = styled.div`
  //border: 2px solid blue;
  width: 18.75rem;
  height: 12.188rem;
`;

const Community_top = styled.div`
  // border: 2px solid purple;
  height: 5.25rem;
`;

const Community_top_title = styled.div`
  //border: 2px solid purple;
  font-family: "OpenSans";
  font-weight: 700;
  font-size: 1.5rem;
`;

const Community_top_tag = styled.div`
  //border: 2px solid green;
  height: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Community_bottom_container = styled.div`
  //border: 2px solid red;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

const Community_bottom_post = styled.div`
  border: 0.031rem solid #C4C4C4;
  width: 18.75rem;
  height: 6.25rem;
  min-height: 6.25rem;
  margin-bottom:1.188rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  cursor: pointer; 
`;

const Community_bottom_post_title = styled.div`
  //border: 2px solid green;
  width: 15.5rem;
  height:1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 600;
`;

const Community_bottom_post_content = styled.div`
  //border: 2px solid orange;
  width: 15.5rem;
  height:1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.625rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;
const Community_bottom_post_response = styled.div`
  //border: 2px solid pink;
  width: 15.5rem;
  height:1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const Community_post_button=styled.img`
  width:3.25rem;
  height: 3.25rem;
  cursor: pointer; 
`;

const Community_post_button_wrapper=styled.div`
  position: absolute;
  bottom: 2rem;
  right: -0.5rem; 
  display: flex;
  justify-content: flex-end;
`;

const Community = () => {
  const [community_active_button, community_set_active_button] = useState("같이해요"); // 태그
  const navigate = useNavigate();

  const community_handle_button_click = (community_button_Text) => { //태그
    community_set_active_button(community_button_Text);
  };

  const community_handle_post_click = () => {//글보기
    navigate('/communityread'); //백엔드에서 정보 받아오기/:Id/communityread
  };

  const community_handle_post_button_click= () => {//글작성
    navigate('/communitywrite'); //백엔드에서 정보 받아오기/:Id/communitywrite
  };

  const community_buttons = ["같이해요", "궁금해요", "정보공유", "일상공유"];

  return (
    <>
      <Community_container>
        <Community_top_container>
          <Community_top />
          <Community_top_title>커뮤니티</Community_top_title>
          <Community_top_tag>
            {community_buttons.map((text) => (
              <Communitybutton
                key={text}
                text={text}
                active={community_active_button === text}
                onClick={() => community_handle_button_click(text)}
              />
            ))}
          </Community_top_tag>
        </Community_top_container>
        <Community_bottom_container>
          <Community_bottom_post onClick={community_handle_post_click}>
            <Community_bottom_post_title>멍멍 애견카페 같이 가실 분 있나요?</Community_bottom_post_title>
            <Community_bottom_post_content>용현동에 새로 생긴 애견카펜데 같이 가실 분 구해요!</Community_bottom_post_content>
            <Community_bottom_post_response>반응</Community_bottom_post_response>
          </Community_bottom_post>
        </Community_bottom_container>
        <Community_post_button_wrapper>
          <Community_post_button src={post_button} alt="post_button" onClick={community_handle_post_button_click} />
        </Community_post_button_wrapper>
      </Community_container>
      <Underbar />
    </>
  );
};

export default Community;