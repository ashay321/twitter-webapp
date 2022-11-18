import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";
import axios from '../../axios';
import { useStateValue } from '../../StateProvider';

function Feed() {
  const [feed, setFeed] = useState([]);
  const [{userId}] = useStateValue();

  const getUserFeed = async() => {

    const response = await axios({
      method: 'get',
      // url: `/user/${userId}/feeds`,
      url: `/user/tweets`,
    })
    setFeed(response.data);
  }

  useEffect(() => {
    getUserFeed();
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {
        feed?.map(post => {
          return <Post
            key={post.tweetId}
            displayName={post.createdUser.name}
            username={post.createdUser.userName}
            verified={post.createdUser.isVerified===3 ? true : false}
            text={post.text}
            avatar={post.createdUser.avatar}
            image={post.image}
            tweetId={post.tweetId}
            numOfLikes={post.numberOFLikes}
            numOfTweets={post.numberOFTweets}
            numOfComments={post.numberOfComments}
          />
        })
      }      
    </div>
  );
}

export default Feed;
