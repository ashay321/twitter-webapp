import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input className="tweet__input" placeholder="whats happening" type="text" />
        </div>

        <div className="media__icon">
          <PermMediaIcon />
        </div>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
