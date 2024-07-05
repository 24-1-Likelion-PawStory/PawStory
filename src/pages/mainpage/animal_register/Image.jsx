import React, { useContext,useState,useEffect } from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import {ReactComponent as Primary_img} from "../../../assets/svg_files/register/Primary_img.svg";
import {ReactComponent as Select_button_img} from "../../../assets/svg_files/register/Select_button.svg";
import { UserContext } from "../../../contexts/User_context";
import axios from "axios";

const Input_wrapper = styled.button`
position: absolute;
width: 9.188rem;
height: 2.375rem;
left: 7.25rem;
top: 31.813rem;
border:none;
padding:0;
background:none;
`

const Image_input = styled.input`
position: absolute;
width: 9.188rem;
height: 2.375rem;
left: 7.25rem;
top: 31.813rem;
display:none;
cursor: pointer;
`

const Image_preview = styled.div`
position: absolute;
width: 12.688rem;
height: 12.688rem;
top: 17.563rem;
border-radius:50%;
display: flex;
  justify-content: center;
  align-items: center;

background: #D9D9D9;
img {
    object-fit:cover;
    max-width: 100%;

  }
  overflow:hidden;
  margin: 0 auto;

`

const Image = () => {
    const navigate = useNavigate();
    const [selected_image,set_selected_image] = useState(null);

    const handle_file_change = (event) => {
        const file = event.target.files[0];
        if(file) {
            const image_url = URL.createObjectURL(file);
            set_selected_image(image_url);
        }
    }
    const handle_button_click =() => {
        document.getElementById("image_input").click();
    }


    const {pet_data, set_pet_data} = useContext(UserContext);

    const handle_submit = async () => {
      const pet_photo = `${selected_image}`
      const updated_pet_data = { ...pet_data, pet_photo };

      try {
        await axios.post('https://pawstory.p-e.kr/users/signup', updated_pet_data);
        navigate('/register_select/name/image/complete'); // POST 후 다음 페이지로 이동
        console.log('success');
      } catch (error) {
        console.error('동물 정보 전달 실패:', error);
      }
    };

    const [is_next_disabled, set_is_next_disabled] = useState(true);
    useEffect(() => {
      set_is_next_disabled(!(selected_image));
    }, [selected_image]);

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="반려동물의 사진을 등록해 주세요."/>

            <Input_wrapper onClick={handle_button_click}>
                <Select_button_img/>
            </Input_wrapper>
            <Image_input
            id="image_input"
            type="file"
            accept="image/*"
            onChange={handle_file_change}
            />

            <Image_preview>
                <img src={selected_image}/>
            </Image_preview>

            <Next_button onClick={handle_submit} disabled={is_next_disabled}></Next_button>
        </>
    );
};

export default Image;