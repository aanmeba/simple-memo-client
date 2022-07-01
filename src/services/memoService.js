import memoAPI from "../config/api";

export const getMemosService = async () => {
  const response = await memoAPI.get("/memos");
  return response.data;
};

export const createMemoService = async (memo) => {
  const response = await memoAPI.post("/memos", memo);
  window.location.reload(false);
  return response.data;
};

export const deleteMemoService = async (id) => {
  const response = await memoAPI.delete(`/memos/${id}`, id);
  window.location.reload(false);
  return response.data;
};

export const editMemoService = async (id, memo) => {
  const response = await memoAPI.put(`/memos/${id}`, memo);
  window.location.reload(false);
  return response.data;
};
