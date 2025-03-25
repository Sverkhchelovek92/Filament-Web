import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

function VideoCard({ video, onVideoClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="video-card">
      <img
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onVideoClick(video.videoUrl)}
        className="video-thumbnail"
        alt={video.title}
        src={
          isHovered
            ? require(`../../public/img/gifs/${video.gif}`)
            : require(`../../public/img/thumbnails/${video.thumbnail}`)
        }
      ></img>

      <div className="video-info">
        <Link to={`/video/${video.id}`}>
          <h3 className="video-title">{video.title}</h3>
        </Link>
        <p className="video-text">{video.text}</p>
      </div>
    </div>
  )
}

export default VideoCard
