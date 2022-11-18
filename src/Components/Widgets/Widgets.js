import React, { useEffect, useState } from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterMentionButton,
  TwitterHashtagButton,
  TwitterFollowButton,
} from "react-twitter-embed";
import WhoToFollow from "./WhoToFollow";
import axios from '../../axios'
import { async } from "@firebase/util";
import { useStateValue } from "../../StateProvider";

function Widgets() {
  const [searchData, setSearchData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [keyword, setKeyword ] = useState("");
  const [followings, setFollowings] = useState([]);
  const [{userId}, dispatch] = useStateValue();

  const getSearchData =async(e) => {
    e.preventDefault();
    let response = await axios.get(`/user/search/${keyword}`);

    if(response.status === 200) {
      setSearchData(response.data)
    }
  }

  const getTrendingData = async() => {
    let response = await axios.get(`/user/trending`);

    if(response.status === 200) {
      setSearchData(response.data)
    }
  }

  const getFollowingsData = async() => {
    let response = await axios.get(`/user/${userId}/followings`);
    if(response.status === 200) {
      setFollowings(response.data);
    }
  }

  useEffect(() => {
    getFollowingsData();
    getTrendingData();
  }, [])

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <form>
          <input type="text" placeholder="Search Twitter" className="input" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
          <button style={{display:'none'}} type="submit" onClick={getSearchData}></button>
        </form>
      </div>
      {/* <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
        <TwitterMentionButton screenName={"saurabhnemade"} />
        <TwitterHashtagButton tag={"cybersecurity"} />
        <TwitterFollowButton />
      </div> */}
      <div className="who_to__follow">
          <WhoToFollow data={searchData} followings={followings}/>
      </div>
    </div>
  );
}

export default Widgets;
