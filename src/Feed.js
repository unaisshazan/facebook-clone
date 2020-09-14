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
          <Post profilePic="https://i.ibb.co/9WBk6LS/Whats-App-Image-2020-06-12-at-10-53-53-PM.jpg"
          message='wow i am certfied'
          timestamp="This is time stamp"
          username="Talha"
          image="https://i.ibb.co/k6V9hRk/image1.jpg"
          
          />
          <Post profilePic="https://i.ibb.co/9WBk6LS/Whats-App-Image-2020-06-12-at-10-53-53-PM.jpg"
          message='wow i am certfied'
          timestamp="This is time stamp"
          username="Amal"
          image="https://i.ibb.co/k6V9hRk/image1.jpg"/>
          <Post />

        </div>
    )
}

export default Feed
