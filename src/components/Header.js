import React from 'react'
import Menu from './Menu'

function Header({ scrollToSection, infoRef, worksRef, feedbackRef }) {
  return (
    <div className="header">
      <Menu
        scrollToSection={scrollToSection}
        infoRef={infoRef}
        worksRef={worksRef}
        feedbackRef={feedbackRef}
      />
    </div>
  )
}

export default Header
