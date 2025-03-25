import React, { useState } from 'react'

import VideoData from '../data/VideoData'
import VideoCard from './VideoCard'

import ReactModal from 'react-modal'
import ReactPlayer from 'react-player'

ReactModal.setAppElement('#root')

function Worksblock() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState('')

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setCurrentVideoUrl('')
  }

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
            videoUrl={video.videoUrl}
            onVideoClick={openModal}
          />
        ))}
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="close-button" onClick={closeModal}>
          ✖
        </button>
        <ReactPlayer
          url={currentVideoUrl}
          controls
          width="100%"
          height="100%"
        />
      </ReactModal>
    </div>
  )
}

export default Worksblock
