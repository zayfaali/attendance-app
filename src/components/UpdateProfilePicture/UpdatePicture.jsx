import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import SettingsIcon from "@mui/icons-material/Settings";

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

const UpdateProfilePicture = () => {
  const { updatePicture } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const profilePicture = data.get("URLbox");
    console.log(profilePicture);
    updatePicture(profilePicture);
    event.target.reset();
  };

  return (
    <div>
      <SettingsIcon
        sx={{ fontSize: 50, cursor: "pointer" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Profile Picture
          </Typography>
          <TextField
            id="URLbox"
            label="Url"
            name="URLbox"
            multiline
            fullWidth
            maxRows={4}
            variant="filled"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit URL
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProfilePicture;
