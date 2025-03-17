import { React, useRef } from 'react'
import Header from '../components/Header'
import Infoblock from '../components/Infoblock'
import Worksblock from '../components/Worksblock'
import Feedback from '../components/Feedback'

function Home() {
  const infoRef = useRef(null)
  const worksRef = useRef(null)
  const feedbackRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        infoRef={infoRef}
        worksRef={worksRef}
        feedbackRef={feedbackRef}
      />
      <div ref={infoRef}>
        <Infoblock />
      </div>

      <div ref={worksRef}>
        <Worksblock />
      </div>

      <div ref={feedbackRef}>
        <Feedback />
      </div>
    </div>
  )
}

export default Home
