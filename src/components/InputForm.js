import { useState } from "react";
import { createMemoService } from "../services/memoService";
import { TextField } from "@mui/material";
import { FormContainer } from "./StyledMui";

const InputForm = () => {
  const initialState = {
    memo: "",
  };
  const [userInput, setUserInput] = useState(initialState);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
