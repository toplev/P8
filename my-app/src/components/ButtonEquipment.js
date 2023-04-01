import '../styles/Collapse.css'
import {useState} from 'react'
import arrow from "../images/arrow.png";
import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";

function Button2 (){
    const idinlist = useParams ('id').id;
	const idnow = aptoList.filter(data => data.id === idinlist)
    const [btnState, setBtnState] = useState(false);

function handeClick (){
    setBtnState (btnState => !btnState)
}

let toggleClassCheck = btnState ? ' active' : '';

return btnState ? (
        <div className="wrapper2">
            <div className={`title${toggleClassCheck}`} onClick={handeClick}>
            <span className="titleinfo">Equipments</span>
            <span><img className={toggleClassCheck ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="showmore"/></span>
            </div>
            <div className="accordion">{idnow.map((data) => (
 			 <div>
                <ul>
                {data.equipments.map((equipments) => (
                <div className="contentequipments" key={data.id}>{equipments}</div>
                 ))}
            </ul>
             </div>))}
			 </div>
             </div>
) :(
        <div className="wrapper2">
            <div className={`title${toggleClassCheck}`} onClick={handeClick}>
            <span className="titleinfo">Equipments</span>
            <span><img className={toggleClassCheck ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="showmore"/></span>
            </div>
        </div>
        )
}

export default Button2;