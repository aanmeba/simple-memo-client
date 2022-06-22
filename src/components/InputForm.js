import { useState } from "react";
import { createMemoService } from "../services/memoService";

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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Enter what you need to remember</label>
        <input
          name="memo"
          type="text"
          value={userInput.memo}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default InputForm;
