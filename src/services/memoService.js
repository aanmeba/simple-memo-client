import memoAPI from "../config/api";

export const getMemosService = async () => {
  const response = await memoAPI.get("/memos");
  // console.log("memoService - get", response.data);
  return response.data;
};

export const createMemoService = async (memo) => {
  const response = await memoAPI.post("/memos", memo);
  console.log("memoService - post", response.data);
  return response.data;
};
