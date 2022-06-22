import { useState } from "react";
import { createMemoService } from "../services/memoService";
import { TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormContainer = styled(Container)`
  width: 100%;
  margin-left: 0.5rem;
`;

const InputForm = () => {
  const [userInput, setUserInput] = useState({
    memo: "",
  });

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
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Your Ideas"
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
