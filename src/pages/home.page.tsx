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
import { useFlatsMutation } from '../apis/flats.api';
import { Flat } from '../models/Flat';

const HomePage: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const [flatsData, setFlatsData] = useState<Flat[]>([]);

  const [flats] = useFlatsMutation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }

    const fetchFlats = async () => {
      try {
        const response = await flats();
        if ('data' in response) {
          setFlatsData(response.data);
        } else {
          console.error('Error fetching flats:', response.error);
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlats();
  }, [flats]);

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
          {auth ? (
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
        <SecondMainTitle>Open Deals</SecondMainTitle>
      </Container>
      <Container>
        <ImageTable>
          {flatsData.map((flat) => (
            <ImageBox key={flat.id}>
              <FlatImageBox src={flat.image_url} />
              <ImageInfoBox>
                <div>
                  <ImageTitleBox>{flat.title}</ImageTitleBox>
                </div>
                <div>
                  <ImagePriceBox>{flat.price} Dhs</ImagePriceBox>
                  <ImageYieldBox>Yield {flat.yield}%</ImageYieldBox>
                  <ImageSoldBox>Sold {flat.sold}%</ImageSoldBox>
                </div>
                <div>
                  <Ticket>Ticket - {flat.ticket} Dhs</Ticket>
                  <DaysLeft>Days left {flat.days_left}</DaysLeft>
                </div>
              </ImageInfoBox>
            </ImageBox>
          ))}
        </ImageTable>
      </Container>
    </>
  );
}

export { HomePage };