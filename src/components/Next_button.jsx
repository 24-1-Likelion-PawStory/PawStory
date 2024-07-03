import React from "react";
import styled from "styled-components";
import Layout from "../pages/Layout";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import {ReactComponent as Next_img} from "../assets/svg_files/signup/next_button.svg";

const Next_button_wrapper = styled.button`
position: absolute;
width: 18.438rem;
height: 2.625;
left: 2.5rem;
top: 41.438rem;
border:none;
background:none;
`

const Next_button = () => {
    const navigate=useNavigate();
    const location=useLocation();

    const handle_click = () => {
        let next_path="";

        switch (location.pathname){
            case "/signup_name_birth":
                next_path = "/signup_name_birth/number";
                break;
            case "/signup_name_birth/number":
                next_path = "/signup_name_birth/number/id";
                break;
            case "/signup_name_birth/number/id":
                next_path = "/signup_name_birth/number/id/password";
                break;
            case "/signup_name_birth/number/id/password":
                next_path = "/signup_name_birth/number/id/password/complete";
                break;
            case "/signup_name_birth/number/id/password/complete":
                next_path = "/register_select";
                break;
            case "/register_select":
                next_path = "/register_select/name";
                break;
            case "/register_select/name":
                next_path = "/register_select/name/image";
                break;
            case "/register_select/name/image":
                next_path = "/register_select/name/image/complete";
                break;
            case "/register_select/name/image/complete":
                next_path = "/loginpage";
                break;

            default:
                next_path = "/";
                break;
        }
        navigate(next_path);
    }
    return (
        <>
            <Next_button_wrapper onClick={handle_click}>
                <Next_img/>
            </Next_button_wrapper>
        </>
    );
};

export default Next_button;