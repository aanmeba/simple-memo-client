import { useEffect, useState } from "react";
import { getMemosService } from "../services/memoService";

const ShowMemos = () => {
  const [memoList, setMemoList] = useState([]);

  useEffect(() => {
    getMemosService()
      .then((data) => setMemoList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {memoList.map((memoObj, key) => (
        <p key={key}>{memoObj.memo}</p>
      ))}
    </>
  );
};

export default ShowMemos;
