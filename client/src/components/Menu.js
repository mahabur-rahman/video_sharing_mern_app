import React from "react";
import styled from "styled-components";
import LogoImg from "../images/youtube.png";
import {
  Home,
  ExploreOutlined,
  AccountCircleOutlined,
  LibraryMusicOutlined,
  HistoryOutlined,
  VideoLibraryOutlined,
  SubscriptionsOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  MovieOutlined,
  ArticleOutlined,
  LiveTvOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  SettingsBrightnessOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
  transition: 0.2s all ease;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImg} />
          YOUTUBE
        </Logo>

        <Item>
          <Home />
          Home
        </Item>

        <Item>
          <ExploreOutlined />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlined />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          {darkMode ? "DarkMode" : "lightMode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
