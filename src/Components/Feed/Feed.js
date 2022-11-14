import React from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Ganesh ppk"
        username="Ganesh ppk"
        verified={true}
        text="Building a sasta twitter application"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        image="https://media.gq.com/photos/57eac35d9228bbed3f6f4ee5/16:9/w_2560%2Cc_limit/elon-musk-is-a-rocket.jpg"
      />
      <Post
        displayName="Ganesh ppk"
        username="Ganesh ppk"
        verified={true}
        text="Building a sasta twitter application"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1prwlaIHckvemT84pP_AP-WkMfFr1ao1q4mgqJEKx&s"
      />
      <Post
        displayName="Ganesh ppk"
        username="Ganesh ppk"
        verified={true}
        text="Building a sasta twitter application"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1prwlaIHckvemT84pP_AP-WkMfFr1ao1q4mgqJEKx&s"
      />
      <Post
        displayName="Ganesh ppk"
        username="Ganesh ppk"
        verified={true}
        text="Building a sasta twitter application"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        image="https://uploads.dailydot.com/2018/11/elon-musk-on-mars.jpg?auto=compress&fm=pjpg"
      />
      <Post
        displayName="Ganesh ppk"
        username="Ganesh ppk"
        verified={true}
        text="Building a sasta twitter application"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1prwlaIHckvemT84pP_AP-WkMfFr1ao1q4mgqJEKx&s"
      />
      
    </div>
  );
}

export default Feed;
