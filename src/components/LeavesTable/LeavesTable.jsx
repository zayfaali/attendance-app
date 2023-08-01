import React, { useContext } from "react";
import { AdminContext } from "../../contexts/admin.context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const LeavesTable = () => {
  const { leaveDetails, approveLeave, declineLeave } = useContext(AdminContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Approval Status</TableCell>
            <TableCell align="right">Approve</TableCell>
            <TableCell align="right">Decline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaveDetails.map((leaveDetail) =>
            leaveDetail.leaves.map((leave) => (
              <TableRow
                key={leave._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${leaveDetail.firstName} ${leaveDetail.lastName}`}
                </TableCell>
                <TableCell align="right">{leave.description}</TableCell>
                <TableCell align="right">
                  {leave.isApproved ? "Approved" : "Declined"}
                </TableCell>
                <TableCell align="right">
                  <DoneOutlineIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => approveLeave(leave._id)}
                  />
                </TableCell>
                <TableCell align="right">
                  <CancelOutlinedIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => declineLeave(leave._id)}
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

export default LeavesTable;
