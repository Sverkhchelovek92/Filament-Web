import React from 'react'

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img
        className="video-thumbnail"
        alt=""
        src={require(`../../public/img/thumbnails/${video.thumbnail}`)}
      ></img>

      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-text">{video.text}</p>
      </div>
    </div>
  )
}

export default VideoCard
