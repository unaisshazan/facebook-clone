import React from "react";
import "./StoryReel.css";
import Story from './Story'
function StoryReel() {
  return (
    <div className="storyreel">
      <Story
        image="https://i.ibb.co/LQ5gJSj/2.jpg"
        profileSrc="https://i.ibb.co/k4hfG25/Areej-Profile2-pic.png"
        title="Areej"
      />

      <Story
        image="https://i.ibb.co/L1zgRcF/Logopit-1590335675218.png"
        profileSrc="https://i.ibb.co/FJf3CxZ/Wardah-Profile-Pic.png"
        title="wardah"
      />

      <Story
        image="https://i.ibb.co/D9CTkXs/slider1.png"
        profileSrc="https://i.ibb.co/LRzxhcy/unais.jpg"
        title="Ali"
      />

      <Story
        image="https://i.ibb.co/12JdF4B/ipad-632394.jpg"
        profileSrc="https://i.ibb.co/7k8cg3n/Whats-App-Image-2020-06-09-at-4-25-24-PM.jpg"
        title="khizer"
      />

      <Story
        image="https://i.ibb.co/7k8cg3n/Whats-App-Image-2020-06-09-at-4-25-24-PM.jpg"
        profileSrc="https://i.ibb.co/6HYzVnV/IMG-3741.jpg"
        title="Utech"
      />
    </div>
  );
}

export default StoryReel;
