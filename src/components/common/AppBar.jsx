import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/global.css";
import Profile from "./Profile";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    console.log("Logo clicked");
    navigate("/dashboard");
  };

  return (
    <Box>
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar-style">
          <img
            src={logo}
            alt="Logo"
            onClick={handleClick}
            className="logo-style"
          />
          <span className="header-name-style">
              {location.pathname === "/dashboard"
                ? "Dashboard"
                : location.pathname === "/invoice"
                ? "Invoice"
                : location.pathname === "/dashboard-admin"
                ? "Leadership Dashboard"
                : ""}
          </span>
          <span className="profile-style">
            <Profile />
          </span>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
