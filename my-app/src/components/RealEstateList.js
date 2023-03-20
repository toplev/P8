import { aptoList } from '../datas/aptoList'
import '../styles/RealEstateList.css'

function RealEstateList() {
	const categories = aptoList.reduce(
		(acc, apto) =>
			acc.includes(apto.category) ? acc : acc.concat(apto.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{aptoList.map((apto) => (
					<li key={apto.id} className='lmj-plant-item'>
						{apto.title}
						{apto.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	)
}

export default RealEstateList