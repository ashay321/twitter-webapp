import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Post({displayName, username, avatar, text, verified, image} ) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
              {verified && <VerifiedIcon className="post__badge" />}
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerdes">
            <p>{text}</p>
          </div>
        </div>
        <img
          src={image}
          alt="Elon mask"
        />
        <div className="post__footer">
          <ChatBubbleIcon className="smallIcons" fontSize="small" />
          <RepeatIcon className="smallIcons" fontSize="small" />
          <FavoriteBorderIcon
            className="smallIcons smallIconsLove"
            fontSize="small"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
