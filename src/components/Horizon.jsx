/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';

const Line_container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0.625rem 0;
`;

const Line = styled.div`
  width: 18.75rem;
  height: 0.019rem;
  background-color: #D9D9D9;
`

const Hr = () => {
  return (
    <Line_container>
      <Line/>
    </Line_container>
  );
};

export default Hr;