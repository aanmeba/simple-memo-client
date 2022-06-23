import { useState } from "react";
import { TextField, Box, Modal, Chip } from "@mui/material";
import { editMemoService, deleteMemoService } from "../services/memoService";
import DoneIcon from "@mui/icons-material/Done";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditModal = (data) => {
  const [newMemo, setNewMemo] = useState({
    _id: data.data._id,
    memo: data.data.memo,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setNewMemo({
      memo: e.target.value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editMemoService(data.data._id, newMemo);
    handleClose();
  };

  const handleDelete = (id) => {
    deleteMemoService(id);
    // window.location.reload(false);
  };

  return (
    <>
      <Chip
        label={newMemo.memo}
        variant="outlined"
        onClick={handleOpen}
        onDelete={() => handleDelete(newMemo._id)}
        deleteIcon={<DoneIcon />}
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
              value={newMemo.memo}
              onChange={handleChange}
            />
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;
