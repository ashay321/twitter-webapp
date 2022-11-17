import React from "react";
import Avatar from "@mui/material/Avatar";
import "./WhoToFollowCard.css";
import { Button } from "@mui/material";
export default function () {
  return (
    <div className="user__follow__card">
      <div className="bar__card">
        <Avatar className="avatar" />
        <div className="header__text">
          <span className="username">Kushagra Singh</span>
          <span className="username__tag">@Kushagra</span>
        </div>
        {/* <div className="follow__btn">
          <h3>Follow</h3>
        </div> */}
        <Button variant="contained"  className="follow__btn">
          follow
        </Button>
      </div>
    </div>
  );
}
