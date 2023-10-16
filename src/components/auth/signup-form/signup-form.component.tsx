import React from 'react';

import { LoginLeftPanel } from '../../panels/login-left-panel.component';
import { LoginRightPanel } from '../../panels/login-right-panel.component';
import { LoginTitle } from '../../titles/login-title.component';
import { LoginBox } from '../../boxes/login-box.component';
import { Header } from '../../header/header.component';
import { InputBox } from '../../boxes/input-box.component';
import { AuthInput } from '../../inputs/auth-input.component';
import { AuthButton } from '../../buttons/auth-button.component';
import { AuthText } from '../../texts/auth-text.component';
import { StandardText } from '../../texts/standard-text.component';
import { StyledLink } from '../../links/auth-link.component';
import { AuthContainer } from '../../containers/auth-container.component';
import { LogoBox } from '../../boxes/logo-box.component';
import { Logo } from '../../logos/logo.component';

const SignupForm: React.FC = () => {
  return (
    <>
      <Header>
        <LogoBox>
          <Logo to="/">LOGO</Logo>
        </LogoBox>
      </Header>
      <AuthContainer>
        <LoginLeftPanel />
        <LoginRightPanel>
          <LoginBox>
            <LoginTitle>Sign Up</LoginTitle>
            <InputBox>
              <AuthText>Email</AuthText>
              <AuthInput
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                autoFocus
              />
            </InputBox>
            <InputBox>
              <AuthText>Password</AuthText>
              <AuthInput
                required
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                autoComplete="current-password"
              />
            </InputBox>
            <AuthButton>Sign Up</AuthButton>
            <StandardText>Have an account? <StyledLink to="/login">Login</StyledLink></StandardText>
          </LoginBox>
        </LoginRightPanel>
      </AuthContainer>
    </>
  )
}

export { SignupForm };
