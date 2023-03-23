import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";

const Service = () => {
	const idinlist = useParams ('id').id;
	console.log(idinlist)
	const idnow = aptoList.filter(data => data.id === idinlist)

	return (
		<div>
			<ul className='lmj-plant-list'>
			<img src={idnow[0].cover} alt='Kasa Logo' className="apto-img"/>
			<h3>{idnow[0].title}</h3>
			</ul>
		</div>
	)
}

export default Service

