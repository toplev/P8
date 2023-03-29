import '../styles/Collapse.css'
import {useState} from 'react'
import arrow from "../images/arrow.png";


function Button (){

const [btnState, setBtnState] = useState(false);

function handeClick (){
    setBtnState (btnState => !btnState)
}

let toggleClassCheck = btnState ? ' active' : '';

    return(
        <div>
        <button className={`btn${toggleClassCheck}`} onClick={handeClick}>Description<img className={toggleClassCheck ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="showmore"/></button>
        </div>
        )
}

export default Button;