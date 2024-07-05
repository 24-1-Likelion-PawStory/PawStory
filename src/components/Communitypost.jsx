import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "../components/Fonts.css";
import Communitypost_response from "../components/Communitypost_response";

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


export default function Communitypost({id, title, content, tag, user_id}){
  const navigate = useNavigate();

  return(
    <>
    <Community_bottom_post onClick={() => navigate(`/communityread`)}> 
      <Community_bottom_post_title>{title}</Community_bottom_post_title>
      <Community_bottom_post_content>{content}</Community_bottom_post_content>
      <Community_bottom_post_response>
      <Communitypost_response/>
      </Community_bottom_post_response>
   </Community_bottom_post>
    </>
  );

}

//백엔드에서 정보 받아오기/:Id/communityread