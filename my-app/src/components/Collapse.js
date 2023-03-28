import '../styles/Collapse.css'
import { useState } from 'react'
import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";
import arrow from "../images/arrow.png";


function Product(){
    const idinlist = useParams ('id').id;
	const idnow = aptoList.filter(data => data.id === idinlist)
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className='collapseinfo'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>{idnow[0].description}</h2>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)} className='collapsebutton'>Description<img className={isOpen ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="showmore"/></button>
    )
}

export default Product
    