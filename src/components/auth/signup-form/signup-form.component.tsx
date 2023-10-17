import React, { useState } from 'react';

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
import { Container } from '../../containers/container.component';
import { LogoBox } from '../../boxes/logo-box.component';
import { Logo } from '../../logos/logo.component';
import { useCreateUserMutation } from '../../../apis/users.api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { useLoginMutation } from '../../../apis/auth.api';
import { User } from '../../../models/User';
import { setAuthState } from '../../../slices/auth.slice';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [createUser] = useCreateUserMutation();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignup = async () => {
    try {
      await createUser({ email, password });
      const response = (await login({ email, password })) as { data: User };
      dispatch(setAuthState({ user: response.data }));
      navigate("/login");
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
            <AuthButton onClick={handleSignup}>Sign Up</AuthButton>
            <StandardText>Have an account? <StyledLink to="/login">Login</StyledLink></StandardText>
          </LoginBox>
        </LoginRightPanel>
      </Container>
    </>
  )
}

export { SignupForm };
