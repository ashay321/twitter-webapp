import React from "react";
import "./NotificationCard.css";
import Avatar from "@mui/material/Avatar";

function NotificationCard() {
  return (
    <div className="notification__card">
      <div className="bar__card">
        <Avatar className="avatar" />
        <div>
          <span className="username">username</span>
          <div>
            <span>Username is liked your tweet </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
