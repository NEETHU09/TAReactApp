import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../../styles/global.css";

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} className="username-style">
        <Avatar sx={{ width: 32, height: 32 }} />
        <span className="username-span">Username</span>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose} style={{ minWidth: 110, height: 25 }}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
