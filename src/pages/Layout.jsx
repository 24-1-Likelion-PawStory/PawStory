import React from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import {ReactComponent as Upper_bar} from "../assets/svg_files/upper_bar.svg";

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
const Upper_bar_wrapper = styled.div`
    width:100%;
    height:2.938rem;
    margin:0;
    padding:0;
`;

const Layout = () => {
  return (
      <Layout_wrapper>
        <Upper_bar_wrapper>
            <Upper_bar/>
        </Upper_bar_wrapper>
        <Outlet/>
      </Layout_wrapper>
  );
};

export default Layout;