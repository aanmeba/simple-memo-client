import { useEffect, useState } from "react";
import { getMemosService } from "../services/memoService";
import { Typography, Box, Divider, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  }, [memoList]);

  return (
    <Wrapper>
      {memoList.map((memoObj, key) => (
        <>
          <Divider orientation="vertical" variant="middle" flexItem />
          <CardItem>
            <Typography wrap>{memoObj.memo}</Typography>
          </CardItem>
          <Divider orientation="vertical" variant="middle" flexItem />
        </>
      ))}
    </Wrapper>
  );
};

export default ShowMemos;
