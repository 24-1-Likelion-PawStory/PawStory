/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { styled } from 'styled-components';
import post_img from '../assets/icons/image_post.png';

const Img_wrapper = styled.div`
  display: flex;
  width: 19.875rem;
  height: 13.5rem;
  margin: 0.938rem 1.781rem;
  justify-content: center;
  align-items: center;
  background-color: #FEF7D3;
  border-radius: 1.25rem;
  cursor: pointer;
`;

const Post_image = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Post_img = () => {
  return (
    <Img_wrapper>
      <Post_image
        src={post_img}
        alt="img"
      />
    </Img_wrapper>
  );
}

export default Post_img;