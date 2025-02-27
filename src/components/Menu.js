import React from 'react'

function Menu() {
  return (
    <div className="menu">
      <div className="wrapper">
        <div className="header-menu">
          <div className="header-menu-logo">
            <div className="logo">Никита Парфенов</div>
          </div>
          <div className="header-menu-main">
            <ul className="header-menu-main-list">
              <li className="header-menu-main-link">Работы</li>
              <li className="header-menu-main-link">О нас</li>
              <li className="header-menu-main-link">Контакты</li>
            </ul>
          </div>
          <div className="header-menu-right">
            <button>Обсудить проект</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
