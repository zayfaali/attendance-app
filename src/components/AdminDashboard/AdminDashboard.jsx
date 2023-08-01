import React, { useContext } from "react";
import { AdminContext } from "../../contexts/admin.context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const AdminDashboard = () => {
  const { allUserDetails, deleteAttendance } = useContext(AdminContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Attendance Date</TableCell>
            <TableCell align="right">Status</TableCell>

            <TableCell align="right">Remove Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUserDetails.map((userDetails) =>
            userDetails.attendances.map((attendance) => (
              <TableRow
                key={attendance._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${userDetails.firstName} ${userDetails.lastName}`}
                </TableCell>
                <TableCell align="right">{attendance.attendanceDate}</TableCell>
                <TableCell align="right">
                  {attendance.isPresent ? "Present" : "Absent"}
                </TableCell>
                <TableCell align="right">
                  <RemoveCircleIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => deleteAttendance(attendance._id)}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminDashboard;

// user.map((row) => (

// ))
