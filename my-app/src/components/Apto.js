import '../styles/Apto.css'
import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";


const Service = () => {
	const idinlist = useParams ('id').id;
	const idnow = aptoList.filter(data => data.id === idinlist)
	const numbers = [1, 2, 3, 4, 5]
	const doubles = numbers.map(x => x * 2) 

	return (
		<div>
			<div className='lmj-plant-list'>
			<img src={idnow[0].cover} alt='Kasa Logo' className="apto-img"/>
			
			<div>
			<h3 className="apto-text">{idnow[0].title}</h3>
			<h1 className="apto-text2">{idnow[0].location}</h1>
			<h1 className="apto-text2">{idnow[0].host.name}</h1>
			<img src={idnow[0].host.picture} alt='Kasa Logo' className="apto-img2"/>
			<h1 className="apto-text2">{idnow[0].rating}</h1>
			{idnow[0].rating ? <span>🔥</span> : <span>👎</span>}
			<h1 className="apto-text2">{numbers}</h1>
			<h1 className="apto-text2">{doubles}</h1>

			<div>
        </div>
			</div>
			</div>
		</div>
	)
}

export default Service
