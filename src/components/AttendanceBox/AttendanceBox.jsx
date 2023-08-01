import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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

const AttendanceBox = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { addAttendance } = useContext(UserContext);
  const [attendanceValue, setAttendanceValue] = useState(dayjs());

  const attendanceDate = attendanceValue.$d;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isPresent = true;
    console.log(attendanceDate);
    addAttendance(attendanceDate, isPresent);
  };

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleOpen}>
        Mark Attendance
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Mark Attendance
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              id="attendanceDate"
              label="attendanceDate"
              name="attendanceDate"
              format="MM-DD-YYYY"
              value={attendanceValue}
              onChange={(newValue) => setAttendanceValue(newValue)}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Mark
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AttendanceBox;
