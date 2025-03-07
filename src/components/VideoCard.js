import React from 'react'

import { useState } from 'react'

function VideoCard({ video }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="video-card">
      <img
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="video-thumbnail"
        alt={video.title}
        src={
          isHovered
            ? require(`../../public/img/gifs/${video.gif}`)
            : require(`../../public/img/thumbnails/${video.thumbnail}`)
        }
      ></img>

      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-text">{video.text}</p>
      </div>
    </div>
  )
}

export default VideoCard
