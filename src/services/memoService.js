import memoAPI from "../config/api";

export const getMemosService = async () => {
  const response = await memoAPI.get("/memos");
  console.log("memoService - get", response.data);
  return response.data;
};

export const createMemoService = async (memo) => {
  const response = await memoAPI.post("/memos", memo);
  console.log("memoService - post", response.data);
  return response.data;
};

export const deleteMemoService = async (id) => {
  console.log("memoService - delete - id", id);
  const response = await memoAPI.delete(`/memos/${id}`, id);
  console.log("memoService - delete", response.data);
  return response.data;
};

export const editMemoService = async (id, memo) => {
  const response = await memoAPI.put(`/memos/${id}`, memo);
  console.log("memoService - edit", response.data);
};
