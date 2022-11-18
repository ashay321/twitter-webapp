import React, { forwardRef, useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from "@mui/icons-material/Publish";
import { Box, FormControl, IconButton, Modal } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { async } from "@firebase/util";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import AddCommentBox from "../AddComment/AddCommentBox"

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, tweetId, numOfLikes, numOfComments, numOfTweets, isComment=false }, ref) => {

    let navigate = useNavigate();
    const [{userId}] = useStateValue();

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState(numOfLikes);
    const [numberOfComments, setNumberOfComments] = useState(numOfComments);
    const [numberOfTweets, setNumberOfTweets] = useState(numOfTweets);
    const [commentBox, setCommentBox] = useState(false);

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
      await axios.delete(`/user/${userId}/bookmark/${tweetId}`);
    }

    const intialLikeState = async() => {
      let response = await axios.get(`/user/${userId}/tweets/${tweetId}`)

      if(response.status === 200) {
        setLiked(response.data);
      }
    }

    const intialBookmarkState = async() => {
      let response = await axios.get(`/user/${userId}/bookmark/${tweetId}`)

      if(response.status === 200) {
        setBookmarked(response.data);
      }
    }

    useEffect(() => {
      intialLikeState();
      intialBookmarkState();
    }, [])

    return (
      <div className="post" ref={ref} >
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
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

          {
          !isComment ? <div className="post__footer">
            <div className="post__conversations">
              <IconButton onClick={() => navigate(`/tweet/${tweetId}` )}><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
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
          </div> : <div></div>
          }
        </div> 
        

        <Modal
          open={commentBox}
          onClose={() => setCommentBox(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box" sx={style}>
            <AddCommentBox tweetId={tweetId}/>
          </Box>
        </Modal>
      </div>
    );
  }
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 900,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 900,
  overflowY: 'scroll',
  borderRadius: 7
};


export default Post;