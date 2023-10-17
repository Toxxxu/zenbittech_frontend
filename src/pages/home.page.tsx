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
import { MainBox } from '../components/boxes/main-box.component';
import { MainTitle } from '../components/titles/main-title.component';
import { DescriptionText } from '../components/texts/description-text.component';
import { GetStartedButton } from '../components/buttons/getstarted-button.component';
import { SecondMainTitle } from '../components/titles/second-main-title.component';
import { ImageTable } from '../components/boxes/image-table.component';
import { ImageBox } from '../components/boxes/image-box.component';
import { ImageInfoBox } from '../components/boxes/image-info-box.component';
import { ImageTitleBox } from '../components/boxes/image-title-box.component';
import { ImagePriceBox } from '../components/boxes/image-price-box.component';
import { ImageYieldBox } from '../components/boxes/image-yield-box.component';
import { ImageSoldBox } from '../components/boxes/image-sold-box.component';
import { DaysLeft, Ticket, TicketAndDays } from '../components/boxes/image-ticket-and-days.component';

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
        <MainPanel>
          <MainBox>
            <MainTitle>The chemical negatively charged</MainTitle>
            <DescriptionText>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is</DescriptionText>
            <GetStartedButton>Get Started</GetStartedButton>
          </MainBox>
        </MainPanel>
      </Container>
      <Container>
        <ImageTable>
          <SecondMainTitle>Open Deals</SecondMainTitle>
          <ImageBox>
            <ImageInfoBox>
              <ImageTitleBox>The Marina Torch</ImageTitleBox>
              <ImagePriceBox>6,500,000 Dhs</ImagePriceBox>
              <ImageYieldBox>Yield 9.25%</ImageYieldBox>
              <ImageSoldBox>Sold 75%</ImageSoldBox>
              <TicketAndDays>
                <Ticket>Ticket - 60,000 Dhs</Ticket>
                <DaysLeft>Days left 150</DaysLeft>
              </TicketAndDays>
            </ImageInfoBox>
          </ImageBox>
        </ImageTable>
      </Container>
    </>
  );
}

export { HomePage };