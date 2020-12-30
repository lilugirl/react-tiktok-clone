import React from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
  return (
    <div className="video">
      <video className="video__player" src="https://www.w3school.com.cn//i/movie.ogg"></video>
      <VideoSidebar/>
      <VideoFooter/>

    </div>
  )
}

export default Video
