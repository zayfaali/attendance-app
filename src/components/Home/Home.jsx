import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome To Attendance Management System
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Login to mark your daily attendance!!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={3}
              justifyContent="center"
            >
              <Link to="/userlogin">
                <Button variant="contained">Login As User</Button>
              </Link>
              <Link to="adminlogin">
                <Button variant="outlined">Login As Admin</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          EziLine Software House
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Developed By Muhammad Huzaifa Ali
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
