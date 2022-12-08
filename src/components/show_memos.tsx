import * as React from "react";
import { useEffect, useState } from "react";
import { getMemosService } from "../services/memo_service";
import { Stack } from "@mui/material";
import { CardItem, Wrapper } from "./styled_mui";
import { EditModal, SingleMemo } from "./edit_modal";

const ShowMemos = () => {
  const [memoList, setMemoList] = useState<SingleMemo[]>([]);

  useEffect(() => {
    getMemosService()
      .then((data) => setMemoList(data))
      // .then((data) => setMemoList(data.reverse()))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      {memoList?.map((memoObj, key) => (
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
