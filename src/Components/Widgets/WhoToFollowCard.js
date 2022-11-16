import React from "react";
import Avatar from "@mui/material/Avatar";
import "./WhoToFollowCard.css";
export default function () {
  return (
    <div className="user__follow__card">
      <div className="bar__card">
        <Avatar className="avatar" />
        <div>
          <span className="username">Kushagra Singh</span>
          <div>
            <span>@Kushagra</span>
          </div>
        </div>
        <div className="follow__btn">
          <h3>Follow</h3>
        </div>
      </div>
    </div>
  );
}
