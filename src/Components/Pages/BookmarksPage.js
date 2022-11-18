import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import "./ExplorePage.css";
import axios from '../../axios';
import { useStateValue } from '../../StateProvider';

function BookmarksPage() {
  const [feed, setFeed] = useState([]);

  const getUserFeed = async() => {

    const response = await axios({
      method: 'get',
      url: `/user/bookmark/1`,
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
        feed?.map(bookmark => {
          return <Post
            key={bookmark.tweet.tweetId}
            displayName={bookmark.tweet.createdUser.name}
            username={bookmark.tweet.createdUser.userName}
            verified={bookmark.tweet.isVerified ? true : false}
            text={bookmark.tweet.text}
            avatar={bookmark.tweet.createdUser.avatar}
            image={bookmark.tweet.image}
            tweetId={bookmark.tweet.tweetId}
            numOfLikes={bookmark.tweet.numberOFLikes}
            numOfTweets={bookmark.tweet.numberOFTweets}
            numOfComments={bookmark.tweet.numberOfComments}
          />
        })
      }      
    </div>
  );
}

export default BookmarksPage;
