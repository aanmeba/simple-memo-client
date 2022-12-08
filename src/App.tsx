import * as React from "react";
import InputForm from "./components/input_form";
import ShowMemos from "./components/show_memos";
import { TopWrapper } from "./components/styled_mui";

const App = () => {
  return (
    <TopWrapper>
      <InputForm />
      <ShowMemos />
    </TopWrapper>
  );
};

export default App;
