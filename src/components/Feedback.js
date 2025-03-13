import React from 'react'

function Feedback() {
  return (
    <div className="main-feedback">
      <div className="main-feedback-container">
        <div className="main-feedback-title">
          <h1>Хотите крутое видео?</h1>
          <h1>Напишите мне</h1>
        </div>
        <div className="main-feedback-form">
          <form>
            <div className="main-feedback-form-top">
              <input
                type="text"
                className="feedback-input-name"
                name="name"
                placeholder="Ваше имя"
                autoComplete="off"
                required
              ></input>
              <input
                type="text"
                className="feedback-input-email"
                name="email"
                placeholder="Ваш e-mail"
                autoComplete="off"
                required
              ></input>
            </div>

            <textarea
              className="feedback-input-text"
              name="text"
              placeholder="Вкратце опишите задачу"
              autoComplete="off"
            ></textarea>
            <div className="feedback-input-bottom">
              <div className="feedback-input-bottom-left">
                <label className="feedback-checkbox-div" for="personalData">
                  <input
                    type="checkbox"
                    id="personalData"
                    name="personal"
                    value="check"
                    className="feedback-checkbox"
                  />
                </label>

                <div className="personal-data">
                  Даю согласие на обработку персональных данных
                </div>
              </div>
              <div className="feedback-input-bottom-right">
                <button type="submit" className="feedback-submit-btn">
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feedback
