import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RecordTable = () => {
  const { userAttendances, getAttendances } = useContext(UserContext);
  useEffect(() => {
    getAttendances();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Attendance Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userAttendances.map((attendance) => (
            <TableRow
              key={attendance._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {attendance.attendanceDate}
              </TableCell>
              <TableCell>
                {attendance.isPresent ? "Present" : "false"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecordTable;
