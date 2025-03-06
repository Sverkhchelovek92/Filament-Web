import React from 'react'

import VideoData from '../data/VideoData'
import VideoCard from './VideoCard'

function Worksblock() {
  return (
    <div className="wrapper">
      <h1 className="works-catalogue-title">Наши работы</h1>
      <div className="works-catalogue">
        {VideoData.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            title={video.title}
            text={video.text}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default Worksblock
