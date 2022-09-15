import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Home = ({ type }) => {
  const [randomVideos, setRandomVideos] = useState([]);

  // fetch random videos

  useEffect(() => {
    const fetchVideos = async () => {
      // const res = await axios.get(`/videos/random`);
      const res = await axios.get(`/videos/${type}`);
      // console.log(res.data);
      setRandomVideos(res.data);
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      {randomVideos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </Container>
  );
};

export default Home;
