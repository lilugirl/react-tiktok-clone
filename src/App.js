import React ,{useEffect}from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {
  // const [videos,setVideos]=useState([]);
  useEffect(()=>{
    console.log(db.collections);
    // db.collections('videos').onSnapshot(snapshot=>console.log(snapshot));
  },[])
  return (
    <div className="app">
      <div className="app__videos">
        <Video url="/sample_640x360.mp4" channel="搞笑一刻" description="这个程序员好沙雕" song="萧亚轩 钻石糖" likes={300} messages={240}  shares={10}/>
        <Video url="/sample_640x360.mp4" channel="搞笑一刻" description="这个程序员好沙雕" song="萧亚轩 钻石糖" likes={330} messages={223}  shares={10}/>
        <Video  url="/sample_640x360.mp4" channel="搞笑一刻" description="这个程序员好沙雕" song="萧亚轩 钻石糖" likes={1300} messages={240}  shares={10}/>
        <Video url="/sample_640x360.mp4" channel="搞笑一刻" description="这个程序员好沙雕" song="萧亚轩 钻石糖" likes={2300} messages={240}  shares={10}/>
        <Video url="/sample_640x360.mp4" channel="搞笑一刻" description="这个程序员好沙雕" song="萧亚轩 钻石糖" likes={3300} messages={240}  shares={10}/>
        <Video url="/sample_640x360.mp4" channel="搞笑一刻" description="这个程序员好沙雕" song="萧亚轩 钻石糖" likes={3040} messages={240}  shares={10}/>
      </div>
    </div>
  );
}

export default App;
