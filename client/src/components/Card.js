import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

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

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({})


  // fetchChannel 
  useEffect(() =>{
    const fetchChannel = async() =>{
      const res = await axios.get(`/users/find/${video.userId}`)
      setChannel(res.data)
    }

    fetchChannel()
  },[video.userId])



  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />

        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel.img}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
