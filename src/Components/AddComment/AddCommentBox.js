import { Avatar, Button, Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./AddCommentBox.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import axios from '../../axios'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import { PhotoCamera } from "@mui/icons-material";
import { useStateValue } from "../../StateProvider";


function AddCommentBox({tweetId}) {
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
        console.log(response.status);
        if(response.status === 201) {
            setDescription("");
        } else {
            alert('Some error occured while posting the tweet')
        }
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input className="tweet__input" placeholder="Reply.." type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>

                
                <Button className="tweetBox__tweetButton" onClick={postNewTweet}>Comment</Button>
            </form>
        </div>
    );
}

export default AddCommentBox;

