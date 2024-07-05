/* eslint-disable react/jsx-pascal-case */
import React, { useState, useRef } from "react";
import { styled } from 'styled-components';
import post_img from '../assets/icons/image_post.png';

const Img_wrapper = styled.div`
  display: flex;
  width: ${props => props.hasImage ? '13.938rem' : '19.875rem'};
  height: ${props => props.hasImage ? '13.938rem' : '13.5rem'};
  margin: 0.938rem 1.781rem;
  justify-content: center;
  align-items: center;
  background-color: #FEF7D3;
  border-radius: 1.25rem;
  cursor: pointer;
  overflow: hidden;
`;

const Img_input = styled.input`
  display:none;
`

const Post_image = styled.img`
  width: ${props => props.hasImage ? '100%' : '4rem'};
  height: ${props => props.hasImage ? '100%' : '4rem'};
  object-fit: contain;
`;

const Post_img = ({ onImageChange }) => {
  const [selected_image,set_selected_image] = useState(null);
  const fileInputRef = useRef(null);

  const handle_img_change = (event) => {
    const file = event.target.files[0];
      if(file) {
        const image_url = URL.createObjectURL(file);
        set_selected_image(image_url);
        onImageChange(image_url);
      }
  }

  const handleWrapperClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Img_wrapper onClick={handleWrapperClick} hasImage={!!selected_image}>
      <Img_input
        ref={fileInputRef}
        id="image_input"
        type="file"
        accept="image/*"
        onChange={handle_img_change}
      />
      <Post_image
        src={selected_image || post_img}
        alt="img"
        hasImage={!!selected_image}
      />
    </Img_wrapper>
  );
}

export default Post_img;