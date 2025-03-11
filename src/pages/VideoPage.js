import React from 'react'
import VideoData from '../data/VideoData'

import { useParams } from 'react-router-dom'

function VideoPage() {
  const { id } = useParams()

  const video = VideoData.find((v) => v.id === parseInt(id))

  if (!video) {
    return <h2>Видео не найдено</h2>
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.text}</p>
    </div>
  )
}

export default VideoPage
