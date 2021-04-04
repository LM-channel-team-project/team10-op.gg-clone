import React from 'react';
import styled, { css } from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import palette from '@/lib/styles/palette';

interface LayoutProps {
  children: React.ReactNode;
  pathName: string;
}

function Layout({ children, pathName }: LayoutProps) {
  const isHomePage = pathName === '/';
  return (
    <Container isHomePage={isHomePage}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

const Container = styled.div<{ isHomePage: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 800px;
  padding: 0 16px;
  align-items: center;
  ${({ isHomePage }) =>
    isHomePage &&
    css`
      background-color: ${palette.background_blue};
    `}

  main {
    display: block;
    flex-basis: 100%;
    width: 100%;
    max-width: 1080px;
  }
`;

export default Layout;
