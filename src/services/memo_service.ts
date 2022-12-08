import { SingleMemo } from "../components/edit_modal";
import memoAPI from "../config/api";

export const getMemosService = async () => {
  try {
    const response = await memoAPI.get("/memos");
    return response.data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export const createMemoService = async (memoObject: SingleMemo) => {
  const response = await memoAPI.post("/memos", memoObject);
  console.log(response?.data, "--- response.data");
  window.location.reload();
  // window.location.reload(false);
  return response.data;
};

export const deleteMemoService = async (id: any) => {
  const response = await memoAPI.delete(`/memos/${id}`, id);
  window.location.reload();
  // window.location.reload(false);
  return response.data;
};

export const editMemoService = async (id: any, memoObject: SingleMemo) => {
  const response = await memoAPI.put(`/memos/${id}`, memoObject);
  window.location.reload();
  // window.location.reload(false);
  return response.data;
};
