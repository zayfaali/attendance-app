import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdminContext } from "../../contexts/admin.context";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const AdminLogin = () => {
  const { setCurrentAdmin, currentAdmin } = useContext(AdminContext);

  useEffect(() => {
    console.log(currentAdmin);
  }, [currentAdmin]);

  const initialFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(initialFormFields);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let newFormFields = {
      email: data.get("email"),
      password: data.get("password"),
    };
    setFormFields(newFormFields);
    console.log(newFormFields);
    // API CALL
    const apiUrl = "http://localhost:5000/api/adminauth/adminlogin";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers here, if needed
        },
        body: JSON.stringify(newFormFields),
      });

      const json = await response.json();
      console.log(json);
      setCurrentAdmin(json.authtoken);
      if (json.authtoken) {
        navigate("/adminpanel");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }

    // Reset the FormData object for the next form submission
    event.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Login As Admin
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AdminLogin;
