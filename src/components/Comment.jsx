/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import styled from 'styled-components';
import "./Fonts.css";
import Hr from "./Horizon"

const Profile_container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
`;

const Userimg = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 5.625rem;
  background-color: #D9D9D9;
  margin: 0 0.438rem 0 4rem;
`

const Username = styled.span`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.625rem;
  align-content: center;
`;

const Comment_txt = styled.div`
  width: 12.5rem;
  height: auto;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  margin: 0.625rem 2rem 0 0;
`

const Add = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 0.75rem;
  margin: auto 0 4.5rem 0;
`;

const Write = styled.input`
  width: 13.188rem;
  height: 1.813rem;
  color: black;
  margin: 0 0 0 2.375rem;
  padding: 0 1rem 0 1rem;
  border: 0.063rem solid #D9D9D9;
  border-radius: 1.25rem;
  cursor: text;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.75rem;
  height: 1.813rem;
  color: #FFFFFF;
  background-color: #FFAA2F;
  border-radius: 1.25rem;
  font-family: 'OpenSans';
  font-weight: 600;
  cursor: pointer;
  margin: 0 0 0 0.75rem;
`;  

const Comment = () => {
  const [newComment,setNewComment] = useState('');

  const handleAdd = () => {
    // if (newComment.trim() === '') return;
    // axios
    //     .post(`http://3.36.127.43:8080/${img_id}/comments`,
    //         {
    //             commentBody: newComment,
    //         })
    //     .then((res)=> {
    //         setComment([...comment,res.data]);
    //         setNewComment('');
    //         window.location.reload();
    //     })
    //     .catch((e)=> {
    //         console.log(e);
    //     });
  }


  return (
    <>
      <Profile_container>
        <Userimg/>
        <Username>taein_0926</Username>
      </Profile_container>
      <Comment_txt>
        후루 내심장을가져가도좋아 사랑해
      </Comment_txt>
      <Hr/>
      <Add>
        <Write
          type="text"
          value={newComment}
          onChange={(e)=>setNewComment(e.target.value)}
          placeholder='댓글을 입력해 주세요.'
        />
        <Button onClick={handleAdd}>등록</Button>
      </Add>
    </>
  );
};

export default Comment;