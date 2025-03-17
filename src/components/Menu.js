import React from 'react'

import logo from './../logo.svg'

function Menu({ scrollToSection, infoRef, worksRef, feedbackRef }) {
  return (
    <div className="menu">
      <div className="wrapper">
        <div className="header-menu">
          <div className="header-menu-logo">
            <div className="logo">
              <img alt="logo" src={logo} width={100} className="logo"></img>
            </div>
          </div>
          <div className="header-menu-main">
            <ul className="header-menu-main-list">
              <li
                className="header-menu-main-link"
                onClick={() => scrollToSection(worksRef)}
              >
                Работы
              </li>
              <li
                className="header-menu-main-link"
                onClick={() => scrollToSection(infoRef)}
              >
                О нас
              </li>
              <li
                className="header-menu-main-link"
                onClick={() => scrollToSection(feedbackRef)}
              >
                Контакты
              </li>
            </ul>
          </div>
          <div className="header-menu-right">
            <button className="header-btn">Обсудить проект</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
