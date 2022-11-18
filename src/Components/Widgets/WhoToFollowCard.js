import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import "./WhoToFollowCard.css";
import { Button } from "@mui/material";
import axios from '../../axios'
import { useStateValue } from "../../StateProvider";

export default function WhoToFollowCard({name, username, id, following}) {
  const [{userId}, dispatch] = useStateValue();

  const setFollowing = async() => {
    let resp = axios.put(`/user/follow/${userId}/${id}`);

  }

  return (
      <div className="follow__card">
        <div className="follow__card__info"> 
          <Avatar className="avatar" />
          <div className="header__text">
            <span className="username">{name}</span>
            <span className="username__tag">{username}</span>
          </div>
        </div>
        {/* <div className="follow__btn">
          <h3>Follow</h3>
        </div> */}
        {
          following ? 
            <Button variant="contained"  className="follow__btn">
              following
            </Button> :
            <Button variant="contained"  className="follow__btn">
            follow
          </Button>
        }
      </div>
  );
}
