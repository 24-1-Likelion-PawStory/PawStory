import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import { ReactComponent as Select_button_img } from "../../../assets/svg_files/register/Select_button.svg";
import { UserContext } from "../../../contexts/User_context";
import axios from "axios";

const Input_wrapper = styled.button`
  position: absolute;
  width: 9.188rem;
  height: 2.375rem;
  left: 7.25rem;
  top: 31.813rem;
  border: none;
  padding: 0;
  background: none;
`;

const Image_input = styled.input`
  position: absolute;
  width: 9.188rem;
  height: 2.375rem;
  left: 7.25rem;
  top: 31.813rem;
  display: none;
  cursor: pointer;
`;

const Image_preview = styled.div`
  position: absolute;
  width: 12.688rem;
  height: 12.688rem;
  top: 17.563rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  img {
    object-fit: cover;
    max-width: 100%;
  }
  overflow: hidden;
  margin: 0 auto;
`;

const Image = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("image_input").click();
  };

  const { petData } = useContext(UserContext);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("pet_photo", selectedFile);

    // 다른 데이터도 추가
    for (const key in petData) {
      formData.append(key, petData[key]);
    }

    try {
      await axios.post("https://pawstory.p-e.kr/users/pet_info", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/register_select/name/image/complete"); // POST 후 다음 페이지로 이동
      console.log("success");
    } catch (error) {
      console.error("동물 정보 전달 실패:", error);
    }
  };

  const [isNextDisabled, setIsNextDisabled] = useState(true);
  useEffect(() => {
    setIsNextDisabled(!selectedFile);
  }, [selectedFile]);

  return (
    <>
      <Back_arrow />
      <Text1 text="반려동물의 사진을 등록해 주세요." />

      <Input_wrapper onClick={handleButtonClick}>
        <Select_button_img />
      </Input_wrapper>
      <Image_input
        id="image_input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <Image_preview>
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="preview" />}
      </Image_preview>

      <Next_button onClick={handleSubmit} disabled={isNextDisabled} />
    </>
  );
};

export default Image;
