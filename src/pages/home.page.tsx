import React from 'react';

import { Header } from '../components/header/header.component';
import { LogoBox } from '../components/boxes/logo-box.component';
import { Logo } from '../components/logos/logo.component';
import { ButtonContainer } from '../components/containers/button-container.component';
import { LoginButton } from '../components/buttons/login-button.component';
import { SignupButton } from '../components/buttons/signup-button.component';
import { ButtonLink } from '../components/links/auth-link.component';
import { Container } from '../components/containers/container.component';
import { MainPanel } from '../components/panels/main-panel.component';

const HomePage: React.FC = () => {
  return (
    <>
      <Header>
        <LogoBox>
          <Logo to="/">LOGO</Logo>
        </LogoBox>
        <ButtonContainer>
          <ButtonLink to="/login"><LoginButton>Log in</LoginButton></ButtonLink>
          <ButtonLink to="/signup"><SignupButton>Sign Up</SignupButton></ButtonLink>
        </ButtonContainer>
      </Header>
      <Container>
        <MainPanel />
      </Container>
    </>
  );
}

export { HomePage };