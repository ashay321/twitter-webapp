import React, { forwardRef, useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from "@mui/icons-material/Publish";
import { FormControl, IconButton } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { async } from "@firebase/util";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, tweetId, numOfLikes, numOfComments, numOfTweets }, ref) => {

    let navigate = useNavigate();
    const [{userId}] = useStateValue();

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState(numOfLikes);
    const [numberOfComments, setNumberOfComments] = useState(numOfComments);
    const [numberOfTweets, setNumberOfTweets] = useState(numOfTweets);

    const likePost = async () => {
      setLiked(!liked);
      setNumberOfLikes(numberOfLikes+1);

      await axios.post(`/user/${userId}/tweets/${tweetId}`);
    }

    const dislikePost = async () => {
      setLiked(!liked);
      setNumberOfLikes(numberOfLikes-1);

      await axios.delete(`/user/${userId}/tweets/${tweetId}`);
    }

    const addBookmark = async() => {
      setBookmarked(!bookmarked);

      await axios.post('/user/bookmark', {
        userId: userId,
        tweetId: tweetId
      });
    }

    const removeBookmark = async() => {
      setBookmarked(!bookmarked);
    }

    return (
      <div className="post" ref={ref} >
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header" onClick={() => navigate(`/tweet/${tweetId}` )}>
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {/* <div className="post__image">
            <img src={image} alt="" />
          </div> */}
          <img src={image} alt="" onClick={() => navigate(`/tweet/${tweetId}` )}/>

          <div className="post__footer">
            <div className="post__conversations">
              <IconButton><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
              <span>{numberOfComments}</span>
            </div>
            
            <div className="post__retweets">
              <IconButton><RepeatIcon fontSize="small" /></IconButton>
              <span>{numberOfTweets}</span>
            </div>
            
      
            <div className="post__likes">
                {liked ? (
                    <FormControl>
                        <IconButton variant="contained" style={{color:"#ed4956",outline:"none"}} type="submit" onClick={dislikePost}> 
                            <FavoriteIcon/>
                        </IconButton>
                    </FormControl>
                    
                    )  : (
                    <FormControl>
                        <IconButton variant="contained" style={{outline:"none"}} type="submit" onClick={likePost}> 
                            <FavoriteBorderIcon/>
                        </IconButton>
                    </FormControl>
                    )
                }
    
                <span>{numberOfLikes}</span>
            </div>

            <div className="post__bookmark">
                {bookmarked ? (
                    <FormControl>
                        <IconButton variant="contained" style={{color:"black",outline:"none"}} type="submit" onClick={removeBookmark}> 
                          <BookmarkIcon/>
                        </IconButton>
                    </FormControl>
                    
                    )  : (
                    <FormControl>
                        <IconButton variant="contained" style={{outline:"none"}} type="submit" onClick={addBookmark}> 
                          <BookmarkBorderIcon/>
                        </IconButton>
                    </FormControl>
                    )
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;