import React from "react";
import InputForm from "./components/InputForm";
import ShowMemos from "./components/ShowMemos";
import { TopWrapper } from "./components/StyledMui";

const App = () => {
  return (
    <TopWrapper>
      <InputForm />
      <ShowMemos />
    </TopWrapper>
  );
};

export default App;
