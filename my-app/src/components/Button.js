import '../styles/Collapse.css'
import { useState } from 'react'
import arrow from '../images/arrow.png'
import { about } from '../datas/about'

function Button() {
  const idnow = about.filter((data) => data.id)
  const [btnStates, setBtnStates] = useState(
    new Array(idnow.length).fill(false)
  )

  // button true or false avec spread operator
  function handeClick(index) {
    setBtnStates((prevState) => {
      const newBtnStates = [...prevState]
      newBtnStates[index] = !newBtnStates[index]
      return newBtnStates
    })
  }

  return (
    <div className="aboutmain">
      {idnow.map((about, index) => (
        <div className="aboutmenu" key={about.id}>
          <div
            className={`title${btnStates[index] ? ' active' : ''}`}
            onClick={() => handeClick(index)}
          >
            <div className="title">{about.about.title}</div>
            <span>
              <img
                className={
                  btnStates[index] ? 'arrow arrow_up' : 'arrow arrow_down'
                }
                src={arrow}
                alt="showmore"
              />
            </span>
          </div>
          {btnStates[index] && (
            <div className="accordion2">
              <ul>
                <div>{about.about.info}</div>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Button
