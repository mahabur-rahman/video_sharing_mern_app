import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #000000a7;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const Label = styled.label`
  font-size: 14px;
`;

function Upload({ setOpen }) {
  const [img, setImg] = useState(undefined); // img
  const [video, setVideo] = useState(undefined); // video
  const [inputs, setInputs] = useState({}); // title, desc
  const [tags, setTags] = useState([]); // tags

  //   percentage show
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);

  //   handleChange  | title, desc
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //   handleTags | tags
  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  //   handleUpload
  const handleUpload = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a New Video</Title>
        <Label>Video:</Label>

        <Input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />

        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <Desc
          placeholder="Description"
          name="desc"
          rows={8}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Separate the tags with commas."
          onChange={handleTags}
        />

        <Label>Image:</Label>

        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />

        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
}

export default Upload;
