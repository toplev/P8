import '../styles/Collapse.css'
import { useState } from 'react'
import arrow from "../images/arrow.png";
import { text } from '../datas/text'

function Text2() {
  const idnow = text.filter(data => data.id)
  const [btnStates, setBtnStates] = useState(new Array(idnow.length).fill(false));

  function handeClick(index) {
    setBtnStates(prevState => {
      const newBtnStates = [...prevState];
      newBtnStates[index] = !newBtnStates[index];
      return newBtnStates;
    });
  }

  return (
    <div className="aboutmain2">
      {idnow.map((text, index) => (
        <div className="aboutmenu2" key={text.id}>
          <div className={`title2${btnStates[index] ? ' active' : ''}`} onClick={() => handeClick(index)}>
            <div className="title2">{text.about.title}</div>
            <span><img className={btnStates[index] ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="showmore"/></span>
          </div>
          {btnStates[index] && (
            <div className="accordion">
              <ul>
                <div>{text.about.info}</div>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Text2;
