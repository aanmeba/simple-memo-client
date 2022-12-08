import * as React from "react";
import { useState } from "react";
import { createMemoService } from "../services/memo_service";
import { TextField } from "@mui/material";
import { FormContainer } from "./styled_mui";
import { SingleMemo } from "./edit_modal";

const InputForm = () => {
  const initialState: SingleMemo = {
    memo: "",
  };
  const [userInput, setUserInput] = useState<SingleMemo>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userInput);
    createMemoService(userInput)
      .then(() => {
        clearInput();
      })
      .catch((err) => console.log(err));
  };

  const clearInput = () => {
    setUserInput(initialState);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="New memo"
          variant="standard"
          name="memo"
          type="text"
          value={userInput.memo}
          onChange={handleChange}
        />
      </form>
    </FormContainer>
  );
};

export default InputForm;
