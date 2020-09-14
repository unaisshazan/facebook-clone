import React,{useState,useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase"
const Feed = () => {
const [posts,setPosts]=useState([]);
useEffect(() => {
  db.collection('posts').onSnapshot(snapshot=>(
    setPosts(snapshot.docs.map(doc=>({
      id:doc.id , data: doc.data()
    })))
  ))
 
}, []);
    return (
        <div className="Feed">
        <StoryReel />    
          <MessageSender/>
          {posts.map(post=>(
            <Post 
            key={post.id}
            profilePic={post.profilePic}
            message={post.message}
            username={post.username}
            image={[post.image]}
            
            />

          ))}

          <Post profilePic="https://i.ibb.co/9WBk6LS/Whats-App-Image-2020-06-12-at-10-53-53-PM.jpg"
          message='wow'
          timestamp="This is time stamp"
          username="Talha"
          image="https://i.ibb.co/k6V9hRk/image1.jpg"
          
          />
          <Post profilePic="https://i.ibb.co/FJf3CxZ/Wardah-Profile-Pic.png"
          message='Hello'
          timestamp="This is time stamp"
          username="Wardah Arshad"
          image="https://i.ibb.co/WVNy5H1/1.jpg"/>
          
          <Post profilePic="https://i.ibb.co/k4hfG25/Areej-Profile2-pic.png"
          message='Hello'
          timestamp="This is time stamp"
          username="Areej Asad"
          image="https://i.ibb.co/Z1JyShg/database.jpg"/>
         
        </div>
    )
}

export default Feed
