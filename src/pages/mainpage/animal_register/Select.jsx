import React, { useContext,useState,useEffect } from "react";
import styled, { StyleSheetContext } from "styled-components";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back_arrow from "../../../components/Back_arrow";
import Next_button from "../../../components/Next_button_check";
import Text1 from "../../../components/Text1";
import {ReactComponent as Dog_img} from "../../../assets/svg_files/register/Dog.svg";
import {ReactComponent as Cat_img} from "../../../assets/svg_files/register/Cat.svg";
import {ReactComponent as Bird_img} from "../../../assets/svg_files/register/Bird.svg";
import {ReactComponent as Fish_img} from "../../../assets/svg_files/register/Fish.svg";
import { UserContext } from "../../../contexts/User_context";

const Dog_wrapper = styled.div`
    svg {
        color: ${props => props.selected ? "#FFDB82" : "#D9D9D9"};
        cursor:pointer;
    }
position: absolute;
width: 6rem;
height: 6rem;
left: 3.5rem;
top: 17.563rem;
`

const Cat_wrapper = styled.div`
    svg {
        color: ${props => props.selected ? "#FFDB82" : "#D9D9D9"};
        cursor:pointer;
    }
position: absolute;
width: 6rem;
height: 6rem;
left: 12.813rem;
top: 17.563rem;

`
const Bird_wrapper = styled.div`
    svg {
        color: ${props => props.selected ? "#FFDB82" : "#D9D9D9"};
        cursor:pointer;
    }
position: absolute;
width: 6rem;
height: 6rem;
left: 3.5rem;
top: 28.063rem;


`
const Fish_wrapper = styled.div`
    svg {
        color: ${props => props.selected ? "#FFDB82" : "#D9D9D9"};
        cursor:pointer;
    }
position: absolute;
width: 6rem;
height: 6rem;
left: 12.813rem;
top: 28.063rem;
`

const Dog_text = styled.p`
position: absolute;
left: 5.2rem;
top: 23.75rem;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #000000;
`

const Cat_text = styled.p`
position: absolute;
left: 14.688rem;
top: 23.75rem;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #000000;
`

const Bird_text = styled.p`
position: absolute;
left: 6.1rem;
top: 34.375rem;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #000000;
`

const Fish_text = styled.p`
position: absolute;
left: 14.688rem;
top: 34.375rem;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #000000;
`

const Select = () => {
    const { pet_data, set_pet_data } = useContext(UserContext);
    const [selected_type,set_selected_type] = useState(false);

    const handle_type = (type) => {
        set_selected_type(type);
    };   
    const handle_submit = async () => {
        const pet_type = `${selected_type}`
        set_pet_data({ ...pet_data, pet_type })};
        
    const [is_next_disabled, set_is_next_disabled] = useState(true);
    useEffect(() => {
        set_is_next_disabled(!(selected_type));
    }, [selected_type]);

    return (
        <>
            <Back_arrow></Back_arrow>
            <Text1 text="반려동물의 종을 선택해 주세요."/>
            <Dog_wrapper selected={selected_type === "Dog"} onClick={() => handle_type("Dog")} onChange={(e) => set_selected_type(e.target.value)}>
                <Dog_img/>
            </Dog_wrapper>
            <Dog_text>강아지</Dog_text>
            <Cat_wrapper selected={selected_type === "Cat"} onClick={() => handle_type("Cat")} onChange={(e) => set_selected_type(e.target.value)}>
                <Cat_img/>
            </Cat_wrapper>
            <Cat_text>고양이</Cat_text>
            <Bird_wrapper selected={selected_type === "Bird"} onClick={() => handle_type("Bird")} onChange={(e) => set_selected_type(e.target.value)}>
                <Bird_img/>
            </Bird_wrapper>
            <Bird_text>새</Bird_text>
            <Fish_wrapper selected={selected_type === "Fish"} onClick={() => handle_type("Fish")} onChange={(e) => set_selected_type(e.target.value)}>
                <Fish_img/>
            </Fish_wrapper>
            <Fish_text>물고기</Fish_text>
            <Next_button onClick={handle_submit} disabled={is_next_disabled}></Next_button>
        </>
    );
};

export default Select;