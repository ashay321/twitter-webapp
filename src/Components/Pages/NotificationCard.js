import React from "react";
import "./NotificationCard.css";
import Avatar from "@mui/material/Avatar";


function NotificationCard({avatar, username, msg}) {
  return (
    <div className="notification__card">
      <div className="bar__card">
        <Avatar src={avatar} className="avatar" />
        <div>
          <span className="username">{username}</span>
          <div>
            <span>{msg} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
