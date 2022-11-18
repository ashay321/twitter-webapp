import { Avatar, Button, Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./AddCommentBox.css";
import axios from '../../axios'
import { useStateValue } from "../../StateProvider";
import SendIcon from '@mui/icons-material/Send';


function AddCommentBox({tweetId, setCommentsData}) {
    const [description, setDescription] = useState('')
    const [{userId}] = useStateValue();

    const postNewTweet = async() => {
        const response = await axios({
            method: 'post',
            url: '/user/tweets/comments',
            data: {
                "commentText": description,
                "userId":userId,
                "tweetId":tweetId
            }
        })
        if(response.status === 201) {
            setDescription("");
            setCommentsData();
        } else {
            alert('Some error occured while posting the tweet')
        }
    }

    return (
        <div className="commentBox">
            <form>
                <div className="commentBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input className="tweet__input" placeholder="Reply.." type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    {/* <Button className="commentBox__tweetButton" onClick={postNewTweet}>Comment</Button> */}
                    <IconButton onClick={postNewTweet}><SendIcon sx={{ color: "black" }}/></IconButton>
                </div>

                
            </form>
        </div>
    );
}

export default AddCommentBox;

