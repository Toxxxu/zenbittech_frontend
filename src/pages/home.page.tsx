import React, { useEffect, useState } from 'react';

import { Header } from '../components/header/header.component';
import { LogoBox } from '../components/boxes/logo-box.component';
import { Logo } from '../components/logos/logo.component';
import { ButtonContainer } from '../components/containers/button-container.component';
import { LoginButton } from '../components/buttons/login-button.component';
import { SignupButton } from '../components/buttons/signup-button.component';
import { ButtonLink } from '../components/links/auth-link.component';
import { Container } from '../components/containers/container.component';
import { MainPicture } from '../components/panels/main-picture.component';
import { MainBox } from '../components/boxes/main-box.component';
import { MainTitle } from '../components/titles/main-title.component';
import { DescriptionText } from '../components/texts/description-text.component';
import { GetStartedButton } from '../components/buttons/getstarted-button.component';
import { SecondMainTitle } from '../components/titles/second-main-title.component';
import { ImageTable } from '../components/boxes/images/image-table.component';
import { ImageBox } from '../components/boxes/images/image-box.component';
import { ImageInfoBox } from '../components/boxes/images/image-info-box.component';
import { ImageTitleBox } from '../components/boxes/images/image-title-box.component';
import { ImagePriceBox } from '../components/boxes/images/image-price-box.component';
import { ImageYieldBox } from '../components/boxes/images/image-yield-box.component';
import { ImageSoldBox } from '../components/boxes/images/image-sold-box.component';
import { DaysLeft, Ticket } from '../components/boxes/images/image-ticket-and-days.component';
import { MainBanner } from '../components/banners/main-banner.component';
import { FlatImageBox } from '../components/boxes/images/flat-image-box.component';

const HomePage: React.FC = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <>
      <Header>
        <LogoBox>
          <Logo to="/">LOGO</Logo>
        </LogoBox>
        <ButtonContainer>
          {auth ? ( // If authenticated, render "Log Out" button
              <LoginButton onClick={handleLogout}>Log Out</LoginButton>
            ) : (
              <>
                <ButtonLink to="/login">
                  <LoginButton>Log in</LoginButton>
                </ButtonLink>
                <ButtonLink to="/signup">
                  <SignupButton>Sign Up</SignupButton>
                </ButtonLink>
              </>
            )}
        </ButtonContainer>
      </Header>
      <Container>
        <MainBanner>
          <MainPicture src="https://www.telegraph.co.uk/content/dam/luxury/2019/01/24/4-CORNERS-1_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RURf_Wk3V23H2268P_XkPxc.jpg" />
          <MainBox>
            <MainTitle>The chemical negatively charged</MainTitle>
            <DescriptionText>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is</DescriptionText>
            <GetStartedButton>Get Started</GetStartedButton>
          </MainBox>
        </MainBanner>
      </Container>
      <Container>
        <ImageTable>
          <SecondMainTitle>Open Deals</SecondMainTitle>
          <ImageBox>
            <FlatImageBox src="https://s3-alpha-sig.figma.com/img/1ad6/f5cc/a2ead523a4bef4a04f8c10ccd9bc436d?Expires=1698624000&Signature=RH8WN2MkIZrGiDfs1uF-6ybFuf2pRCAs-tivLIjbGY~UhWmNkECiSo3e9R7fgY8VjXIfvghORWW0kKEpx5NurElFzwiwJa8lTVvp9mZKq6Rtxp-Sup3~wsqbn0ky527pMQYUgwd3D~t7VL~yRiuHpcn~xnX4tNM9PwCftGvQfUEMqvp9ZUr-7BhFciQo7ZQDGTag7IgAmcQmw7iUF08-Da5VvWFUO12nd8fD6TyVN10BZz70ngghbLwwrauShU6KN9r-D1ILw7jojJShi-oWNEp0-E7fpqfR-g1zg~xR8MUyfF5p3E296NOoyg3Jd7w5YE5xR7JljHl~vKd7M2WI~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></FlatImageBox>
            <ImageInfoBox>
              <div>
                <ImageTitleBox>The Marina Torch</ImageTitleBox>
              </div>
              <div>
                <ImagePriceBox>6,500,000 Dhs</ImagePriceBox>
                <ImageYieldBox>Yield 9.25%</ImageYieldBox>
                <ImageSoldBox>Sold 75%</ImageSoldBox>
              </div>
              <div>
                <Ticket>Ticket - 60,000 Dhs</Ticket>
                <DaysLeft>Days left 150</DaysLeft>
              </div>
            </ImageInfoBox>
          </ImageBox>
        </ImageTable>
      </Container>
    </>
  );
}

export { HomePage };