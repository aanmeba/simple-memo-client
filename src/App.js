import React from "react";
import InputForm from "./components/InputForm";
import ShowMemos from "./components/ShowMemos";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const TopWrapper = styled(Container)`
  width: 70vw;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const App = () => {
  return (
    <TopWrapper>
      <InputForm />
      <ShowMemos />
    </TopWrapper>
  );
};

export default App;
