import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { AuthService } from "../../service/authenticationService";
import { constant } from "../../configuration/constants";
import { useNavigate } from "react-router-dom";
import "../login/LoginPage.css";

const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginPage() {
  const navigate = useNavigate();
  
  const [name, setName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  // const [userLogin, setUserLogin] = React.useState({});
  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleUsername = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPwd(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const data = {
        username: name,
        password: pwd,
      };
      await AuthService.authenticateUser(data).then((res) => {
        // setUserLogin(res);
        // console.log("res: ", res);
        console.log("data", data);
        sessionStorage.setItem(
          "username",
          data.username
        );

        if (res?.message === constant.Authorized) {
          console.log("dashboard admin");
          navigate("/dashboard-admin");
        } else if (res?.message === constant.User) {
          console.log("dashboard");
          navigate("/dashboard");
        } else {
          console.log("login");
          setErrorOpen(true);
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Alert close button function
  const handleCloseError = (event, reason) => {
    if (reason === constant.clickaway) {
      return;
    }
    setErrorOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="login-box">
          <Avatar className="lock-avatar">
            <LockOutlinedIcon className="lock-icon" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome!
          </Typography>
          <p>Please login to access your account</p>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address/ Username"
              autoFocus
              value={name}
              onChange={handleUsername}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={pwd}
              onChange={handlePassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="login-button"
              onClick={handleClick}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={errorOpen}
          autoHideDuration={2000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: "100%" }}
          >
            Unauthorized
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
