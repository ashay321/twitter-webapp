import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Box, Button, Modal, Typography } from "@mui/material";
import TweetBox from "../TweetBox/TweetBox";
function Sidebar() {
  const [tweetBox, setTweetBox] = useState(false);

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

      <Button variant="outlined" className="tweet__btn" onClick={() => setTweetBox(true)}>
        Tweet
      </Button>

      <Modal
        open={tweetBox}
        onClose={() => setTweetBox(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box" sx={style}>
          <TweetBox/>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 900,
  overflowY: 'scroll',
};




export default Sidebar;
