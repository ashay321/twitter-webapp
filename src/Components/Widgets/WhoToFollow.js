import React, { useEffect } from 'react'
import './WhoToFollow.css';
import WhoToFollowCard from './WhoToFollowCard';
export default function WhoToFollow({data, followings}) {
  return (
    <div className='whotofollow__container'>
        <h3 className='header'>Who to follow</h3>
        {
          data.map(user => {
            
            return <WhoToFollowCard key={user.userId} name={user.name} username={user.userName} following={false}/>
          })
        }
    </div>
  )
}
