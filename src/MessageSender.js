import React from 'react'
import './MessageSender.css'
function MessageSender() {
    const handleSubmit=e=>{

      e.preventDefault();  
    }
    return (
        <div className='messageSender'>
        <div className="messageSender__top">
        <Avatar />
        <form >
            <input placeholder={`Whats in your mind`}/>
            <input placeholder="image URL (Optional)"/>
             <button onClick={handleSubmit} type="submit">
             Hidden submit</button>       
            </form>
        </div>
        <div className="messageSender__bottom">
        </div>
            
        </div>
    )
}

export default MessageSender
