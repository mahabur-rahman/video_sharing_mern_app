import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  margin-top: 1rem;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  background-color: #999;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
`;

const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 9px 0px;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  console.log("card comp : ", type);
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        />

        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
