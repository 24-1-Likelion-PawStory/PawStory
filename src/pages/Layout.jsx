/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layout_wrapper = styled.div`
  width: 23.438rem;
  height: 50.75rem;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Layout = () => {
  return (
      <Layout_wrapper>
        <Outlet/>
      </Layout_wrapper>
  );
};

export default Layout;