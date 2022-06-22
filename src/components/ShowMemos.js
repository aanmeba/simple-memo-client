import { useEffect, useState } from "react";
import {
  deleteMemoService,
  editMemoService,
  getMemosService,
} from "../services/memoService";
import {
  Typography,
  Stack,
  Box,
  Divider,
  Container,
  Chip,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
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
  }, []);

  const handleClick = (id) => {
    console.log("click - id", id);
    // editMemoService(id);
  };

  const handleDelete = (id) => {
    console.log("delete - id", id);
    deleteMemoService(id);
  };

  return (
    <Wrapper>
      {memoList.map((memoObj, key) => (
        <>
          <Divider orientation="vertical" variant="middle" flexItem />
          <CardItem key={key}>
            <Stack direction="row" spacing={1}>
              <Chip
                label={memoObj.memo}
                variant="outlined"
                onClick={() => handleClick(memoObj._id)}
                onDelete={() => handleDelete(memoObj._id)}
                deleteIcon={<DoneIcon />}
              />

              {/* <Typography wrap onClick={() => handleClick(memoObj._id)}>
              {memoObj.memo}
            </Typography> */}
            </Stack>
          </CardItem>
          <Divider orientation="vertical" variant="middle" flexItem />
        </>
      ))}
    </Wrapper>
  );
};

export default ShowMemos;
