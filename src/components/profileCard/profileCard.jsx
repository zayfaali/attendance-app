import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../contexts/user.context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LeaveBox from "../LeaveBox/LeaveBox";
import AttendanceBox from "../AttendanceBox/AttendanceBox";
import ViewRecordBox from "../ViewRecordBox/ViewRecordBox";
import UpdateProfilePicture from "../UpdateProfilePicture/UpdatePicture";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  },
  card: {
    maxWidth: 400,
  },
  icon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  iconButton: {
    fontSize: 50,
    cursor: "pointer",
  },
}));

const ProfileCard = () => {
  const classes = useStyles();
  const { userDetails, attendanceCount, leaveCount } = useContext(UserContext);

  return (
    <>
      <div className={classes.icon}>
        <UpdateProfilePicture />
      </div>

      <div className={classes.cardContainer}>
        <Card className={classes.card} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={`${userDetails.profilePicture}`}
            title="profile picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${userDetails.firstName} ${userDetails.lastName}`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Total Attendance Marked : {attendanceCount}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Total Leaves Submitted : {leaveCount}
            </Typography>
          </CardContent>
          <CardActions>
            <AttendanceBox />
            <LeaveBox />
            <ViewRecordBox />
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ProfileCard;
