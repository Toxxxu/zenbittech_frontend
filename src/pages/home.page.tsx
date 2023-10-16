import React from 'react';
import styled from 'styled-components';

import { Header } from '../components/header/header.component';
import { LogoBox } from '../components/boxes/logo-box.component';
import { Logo } from '../components/logos/logo.component';

const Container = styled.div`
  display: flex;
  height: 733px;
  background-color: #F0F6FF;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Header>
        <LogoBox>
          <Logo to="/">LOGO</Logo>
        </LogoBox>
      </Header>
      <Container>

      </Container>
    </>
  );
}

export { HomePage };