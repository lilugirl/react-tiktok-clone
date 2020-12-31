import React,{useRef,useState} from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
  url,channel,description,song,likes,messages,shares
}) {
  const videoRef=useRef(null);
  const [playing,setPlaying]=useState(false);
  const onVideoPress=(e)=>{
     if(playing){
       setPlaying(false);
       videoRef.current.pause();
     }else{
       setPlaying(true);
       videoRef.current.play();
     }
  }
  return (
    <div className="video">
      <video onClick={onVideoPress}  ref={videoRef} loop  className="video__player" src={url}></video>
      
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  )
}

export default Video
