import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Underbar from "../components/Underbar";
import styled from "styled-components";
import "../components/Fonts.css";
import Communitybutton from "../components/Communitybutton";
import post_button from "../assets/icons/post_button.png";
import Communitypost from "../components/Communitypost";
import { CommunityContext } from "../contexts/Community_context";

const Community_container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 46.562rem;
  position: relative;
`;

const Community_top_container = styled.div`
  width: 18.75rem;
  height: 12.188rem;
`;

const Community_top = styled.div`
  height: 5.25rem;
`;

const Community_top_title = styled.div`
  font-family: "OpenSans";
  font-weight: 700;
  font-size: 1.5rem;
`;

const Community_top_tag = styled.div`
  height: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Community_bottom_container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Community_post_button = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  cursor: pointer;
`;

const Community_post_button_wrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: -0.5rem;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
`;

const Community_buttons = ["같이해요", "궁금해요", "정보공유", "일상공유"];

const Community = () => {
  const { posts } = useContext(CommunityContext);
  const [Community_active_button, Community_set_active_button] = useState("같이해요");
  const [Community_filter_posts, Community_set_filter_posts] = useState([]);
  const navigate = useNavigate();

  const Community_handle_button_click = (buttonText) => {
    Community_set_active_button(buttonText);
    Community_filter_posts_tag(buttonText);
  };

  const Community_filter_posts_tag = (tag) => {
    const filteredPosts = posts.filter(post => post.tag.name === tag);
    Community_set_filter_posts(filteredPosts);
  };

  useEffect(() => {
    Community_filter_posts_tag(Community_active_button);
  }, [Community_active_button, posts]);

  return (
    <>
      <Community_container>
        <Community_top_container>
          <Community_top />
          <Community_top_title>커뮤니티</Community_top_title>
          <Community_top_tag>
            {Community_buttons.map((text) => (
              <Communitybutton
                key={text}
                text={text}
                active={Community_active_button === text}
                onClick={() => Community_handle_button_click(text)}
              />
            ))}
          </Community_top_tag>
        </Community_top_container>
        <Community_bottom_container>
          {Community_filter_posts.map(post => (
            <StyledLink key={post.id} to={`/communityread?id=${post.id}`}>
              <Communitypost 
                id={post.id}
                title={post.title}
                content={post.content}
                tag={post.tag.name}
                user_id={post.user.user_id}
              />
            </StyledLink>
          ))}
        </Community_bottom_container>
        <Community_post_button_wrapper>
          <Community_post_button src={post_button} alt="post_button" onClick={() => navigate('/communitywrite')} />
        </Community_post_button_wrapper>
      </Community_container>
      <Underbar />
    </>
  );
};

export default Community;




