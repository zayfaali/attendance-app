import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { AdminContext } from "../../contexts/admin.context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router-dom";

const ButtonAppBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentAdmin, setCurrentAdmin } = useContext(AdminContext);

  const navigate = useNavigate();

  const LogoutHandler = () => {
    setCurrentUser(null);
    setCurrentAdmin(null);
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ATTENDANCE SYSTEM
          </Typography>
          {currentUser && (
            <>
              <Link to="/userpanel">
                <Button variant="contained" color="info">
                  User Panel
                </Button>
              </Link>
              <Button variant="contained" color="info" onClick={LogoutHandler}>
                Logout
              </Button>
            </>
          )}
          {currentAdmin && (
            <>
              <Link to="/adminpanel">
                <Button variant="contained" color="info">
                  Admin Panel
                </Button>
              </Link>
              <Link to="/leavesmodule">
                <Button variant="contained" color="info">
                  Leaves Panel
                </Button>
              </Link>
              <Button variant="contained" color="info" onClick={LogoutHandler}>
                Logout
              </Button>
            </>
          )}
          {!currentUser && !currentAdmin && (
            <Link to="/usersignup">
              <Button variant="contained" color="info">
                User SignUp
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ButtonAppBar;
