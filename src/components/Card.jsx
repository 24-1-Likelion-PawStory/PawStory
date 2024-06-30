/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const Card_photo = styled.img`
  width: 16.75rem;
  height: 16.813rem;
  border-radius: 1.25rem;
`;

const Card_wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Card({ img, name, id }) {
  const navigate = useNavigate();

  return (
    <Card_wrapper id={id} onClick={() => navigate(`/user/${id}`)}>
      <Card_photo src={img} alt={name} />
    </Card_wrapper>
  );
}
