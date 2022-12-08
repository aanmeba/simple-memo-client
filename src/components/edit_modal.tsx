import * as React from "react";
import { useState } from "react";
import { TextField, Box, Modal, Chip } from "@mui/material";
import { editMemoService, deleteMemoService } from "../services/memo_service";
import CloseIcon from "@mui/icons-material/Close";
import { style } from "./styled_mui";

export interface SingleMemo {
  _id?: string;
  memo: string;
}

type MemoType = {
  data: SingleMemo;
};

export const EditModal = (data: MemoType) => {
  const [newMemo, setNewMemo] = useState<SingleMemo>({
    _id: data.data?._id,
    memo: data.data?.memo,
  });
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemo({
      memo: e.target.value,
    });
  };

  const handleEdit = (e: any) => {
    e.preventDefault();
    editMemoService(data.data?._id, newMemo);
    handleClose();
  };

  const handleDelete = (id: string) => {
    deleteMemoService(id);
    // window.location.reload(false);
  };

  return (
    <>
      <Chip
        label={newMemo.memo}
        variant="outlined"
        onClick={handleOpen}
        onDelete={() => handleDelete(newMemo?._id ?? "")}
        deleteIcon={<CloseIcon />}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleEdit}>
            <TextField
              id="standard-basic"
              label="Edit"
              variant="standard"
              name="edit"
              type="text"
              value={newMemo?.memo}
              onChange={handleChange}
            />
          </form>
        </Box>
      </Modal>
    </>
  );
};
