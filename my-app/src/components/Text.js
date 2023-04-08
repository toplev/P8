import '../styles/Collapse.css'
import { useState } from 'react'
import arrow from "../images/arrow.png";
import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";

function Text2() {
  const idinlist = useParams ('id').id;
	const idnow = aptoList.filter(data => data.id === idinlist)
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
            <div className="title2">Description</div>
            <div className="title2">Equipments</div>
            <span><img className={btnStates[index] ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="showmore"/></span>
          </div>
          {btnStates[index] && (
            <div className="accordion">
              <ul>
                <div>{idnow[0].description}</div>
                <div>{idnow[0].equipments}</div>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Text2;
