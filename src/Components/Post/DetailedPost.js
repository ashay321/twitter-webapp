import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Post from './Post';
import axios from "../../axios"
import './DetailedPost.css'
import { Button } from '@mui/material';
import AddCommentBox from '../AddComment/AddCommentBox';

function DetailedPost() {
    const { id } = useParams();
    const [tweetDetails, setTweetDetails] = useState({});
    const [comments, setComments] = useState([]);

    const setCommentData = async() => {
        const response = await axios.get(`/user/tweets/${id}/comments`);

        if(response.status === 200) {
            setComments(response.data);
        }
    }

    const getTweetData = async() => {
        const response = await axios.get(`/user/tweets/${id}`);

        if(response.status === 200) {
            setTweetDetails(response.data);
        }
    }

    useEffect(() => {
        getTweetData();
        setCommentData();
    },[])

    return (
        <div>
            {tweetDetails.createdUser!= null ? <Post
                displayName={tweetDetails.createdUser.name}
                username={tweetDetails.createdUser.userName}
                verified={tweetDetails.createdUser.isVerified === 3 ? true : false}
                text={tweetDetails.text}
                avatar={tweetDetails.createdUser.avatar}
                image={tweetDetails.image}
                numOfLikes={tweetDetails.numberOFLikes}
                numOfComments={tweetDetails.numberOfComments}
                numOfTweets={tweetDetails.numberOFTweets}
                tweetId={tweetDetails.tweetId}
            /> : <div></div>}

            <AddCommentBox tweetId={tweetDetails.tweetId} setCommentsData={setCommentData}/>
            <div className="comments__header">
                Comments
            </div>

            {
                comments.map(comment => {
                    return <Post
                        key={comment.commentId}
                        displayName={comment.user.name}
                        username={comment.user.userName}
                        verified={comment.user.isVerified === 3 ? true : false}
                        text={comment.commentText}
                        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                        image=""
                        isComment={true}
                    />
                })
            }
            
        </div>
    )
}

export default DetailedPost