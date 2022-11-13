import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Button } from "@mui/material";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <div className="twitter__handler">
        <TwitterIcon className="twitter__icon" />
      </div>
      {/* List  */}
      <SidebarOption
        active
        Icon={<HomeIcon />}
        text="Home"
        navigationPath="/home"
      />
      <SidebarOption
        Icon={<ExploreIcon />}
        text="Explore"
        navigationPath="/explore"
      />
      <SidebarOption
        Icon={<NotificationsIcon />}
        text="Notifications"
        navigationPath="/notifications"
      />
      <SidebarOption
        Icon={<MailOutlineIcon/>}
        text="Messages"
        navigationPath="/messages"
      />
      <SidebarOption
        Icon={<PersonIcon />}
        text="Profile"
        navigationPath="/profile"
      />
      <SidebarOption
        Icon={<SettingsIcon />}
        text="Settings"
        navigationPath="/settings"
      />

      {/* Tweet Button */}

      <Button variant="outlined" className="tweet__btn">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
