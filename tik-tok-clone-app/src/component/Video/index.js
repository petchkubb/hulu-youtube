import React, { useRef, useState } from "react"
import VideoFooter from "../VideoFooter"
import VideoSideBar from "../VideoSideBar"
import "./Video.css"

const Video = ({ channel, description, song, likes, shares, messages ,url}) => {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const onVideoPress = () => {
    console.log("qwe")
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}

export default Video