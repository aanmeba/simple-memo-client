import { useEffect, useState } from "react";
import { getMemosService } from "../services/memoService";
import { Stack, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import EditModal from "./EditModal";

const Wrapper = styled(Container)`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const CardItem = styled(Box)`
  padding: 0.5rem;
`;

const ShowMemos = () => {
  const [memoList, setMemoList] = useState([]);

  useEffect(() => {
    getMemosService()
      .then((data) => setMemoList(data.reverse()))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      {memoList.map((memoObj, key) => (
        <CardItem key={key}>
          <Stack direction="row" spacing={1}>
            <EditModal data={memoObj} />
          </Stack>
        </CardItem>
      ))}
    </Wrapper>
  );
};

export default ShowMemos;
