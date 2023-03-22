import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";

function RealEstateListone() {

	let { id } = useParams();

	return (
		<div>
			<h3>ID: {id}</h3>
			<ul className='lmj-plant-list'>
				{aptoList.map((id, title, cover, pictures, description, host, rating, location, equipments, tags) => (
					<div key={id}>
					<div>{id.title}</div>
				</div>
				))}
			</ul>
		</div>
	)
}

export default RealEstateListone

