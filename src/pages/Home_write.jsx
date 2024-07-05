import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios'; // axiosInstance를 사용합니다.
import { styled } from 'styled-components';
import Back_button from "../components/Back";
import Toggle from "../components/Toggle";
import Post_img from "../components/Post_img";
import Post_text from "../components/Post_text";
import Register from "../components/Register_btn";

const Write_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 47.813rem;
  position: absolute;
  top: 2.938rem;
`;

const Home_write = () => {
  const [postData, setPostData] = useState({
    photo: '',
    content: '',
    is_public: 'public', // 기본 값을 'public'으로 설정
  });
  const [formData, setFormData] = useState(new FormData());
  const navigate = useNavigate();

  const handleImageChange = (photo) => {
    setPostData(prev => ({ ...prev, photo }));
  };

  const handleTextChange = (content) => {
    setPostData(prev => ({ ...prev, content }));
  };

  const handleRegister = async () => {
    formData.append('content', postData.content)
    formData.append('is_public', 'public');
    try {
      for (const x of formData.entries()) {
        console.log(x);
       };
      const response = await axiosInstance.post('diaries/diary/create', 
        formData
        // postData
      );
      // 성공적으로 업로드된 후
      navigate('/diary', { state: { postData: response.data } });
    } catch (error) {
      console.error("There was an error uploading the post!", error);
    }
  };

  return (
    <>
      <Write_container>
        <Back_button />
        <Toggle />
        <Post_img formData={formData} onImageChange={handleImageChange} />
        <Post_text formData={formData} onTextChange={handleTextChange} />
        <Register onClick={handleRegister} />
      </Write_container>
    </>
  );
};

export default Home_write;
