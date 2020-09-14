import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
const Feed = () => {
    return (
        <div className="Feed">
        <StoryReel />    
          <MessageSender/>
          <Post />

        </div>
    )
}

export default Feed
