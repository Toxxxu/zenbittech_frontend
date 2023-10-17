import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import { ForgotPasswordLink, StyledLink } from '../../links/auth-link.component';
import { Container } from '../../containers/container.component';
import { LogoBox } from '../../boxes/logo-box.component';
import { Logo } from '../../logos/logo.component';
import { useLoginMutation } from '../../../apis/auth.api';
import { User } from '../../../models/User';
import { useAppDispatch } from '../../../app/hooks';
import { setAuthState } from '../../../slices/auth.slice';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = (await login({ email, password })) as { data: User };
      dispatch(setAuthState({ user: response.data }));
      localStorage.setItem('token', response.data.access_token ?? "");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <>
      <Header>
        <LogoBox>
        <Logo to="/">LOGO</Logo>
        </LogoBox>
      </Header>
      <Container>
        <LoginLeftPanel />
        <LoginRightPanel>
          <LoginBox>
            <LoginTitle>Login</LoginTitle>
            <InputBox>
              <AuthText>Email</AuthText>
              <AuthInput
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </InputBox>
            <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
            <AuthButton onClick={handleLogin}>Sign In</AuthButton>
            <StandardText>Don't have account? <StyledLink to="/signup">Sign Up</StyledLink></StandardText>
          </LoginBox>
        </LoginRightPanel>
      </Container>
    </>
  )
}

export { LoginForm };
