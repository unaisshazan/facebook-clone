import React,{useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import {useStateValue} from "./StateProvider";
function MessageSender() {
    const [{user},dispatch]=useStateValue();

    const[input,setInput]= useState("");
    const [imageUrl, setimageUrl] = useState("")
    const handleSubmit=e=>{

      e.preventDefault();  
      setInput("");
      setimageUrl("")
    }


    return (
        <div className='messageSender'>
        <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form >
            <input 
            value={input} onChange={(e) => setInput(e.target.value)}
            className="messageSender__input" placeholder={`Whats in your mind, ${user.displayName} ?`}/>
            <input
             value={imageUrl}
             onChange= {(e)=> setimageUrl(e.target.value)}
            placeholder="image URL (Optional)"/>
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
