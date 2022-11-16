import React from 'react'
import './WhoToFollow.css';
import WhoToFollowCard from './WhoToFollowCard';
export default function WhoToFollow() {
  return (
    <div className='whotofollow__container'>
        <h3 className='header'>Who to follow</h3>
        <WhoToFollowCard />
    </div>
  )
}
