import { useEffect, useState } from "react";
import { getMemosService } from "../services/memoService";
import { Stack } from "@mui/material";
import { CardItem, Wrapper } from "./StyledMui";
import EditModal from "./EditModal";

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
