import React from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
function MessageSender() {
    const handleSubmit=e=>{

      e.preventDefault();  
    }
    return (
        <div className='messageSender'>
        <div className="messageSender__top">
        <Avatar />
        <form >
            <input placeholder={`Whats in your mind?`}/>
            <input placeholder="image URL (Optional)"/>
             <button onClick={handleSubmit} type="submit">
             Hidden submit</button>       
            </form>
        </div>
        <div className="messageSender__bottom">
        <div className="messsageSender__option">
        <VideocamIcon style={{color:"red"}} />
        <h3>Live Video</h3>
        </div>
        <div className="messsageSender__option">
        <PhotoLibraryIcon style={{color:"green"}} />
        <h3>Photo/Video</h3>
        </div>
        <div className="messsageSender__option">
        <InsertEmoticonIcon  style={{color:"orange"}} />
        <h3>Feelings/Activity</h3>
        </div>
        </div>
            
        </div>
    )
}

export default MessageSender
