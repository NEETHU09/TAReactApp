import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../login/LoginPage.css";

const theme = createTheme();

export default function LoginForm({ Login }) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(loginData);
    Login(loginData);
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
              label="Email Address/ Username"
              autoFocus
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              value={loginData.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              value={loginData.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="login-button"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}




// Bkp
// import Reactfrom "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import "../login/LoginPage.css";

// const theme = createTheme();

// export default function LoginForm({ Login }) {
//   const [name, setName] = React.useState("");
//   const [pwd, setPwd] = React.useState("");

//   const handleUsername = (event) => {
//     setName(event.target.value);
//   };
//   const handlePassword = (event) => {
//     setPwd(event.target.value);
//   };

//   const handleClick = async (event) => {
//     const data = {
//       username: name,
//       password: pwd,
//     };
//     Login(data);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box className="login-box">
//           <Avatar className="lock-avatar">
//             <LockOutlinedIcon className="lock-icon" />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Welcome!
//           </Typography>
//           <p>Please login to access your account</p>
//           <Box
//             component="form"
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email Address/ Username"
//               value={name}
//               onChange={handleUsername}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Password"
//               value={pwd}
//               onChange={handlePassword}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               className="login-button"
//               onClick={handleClick}
//             >
//               Login
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
