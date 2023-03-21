import '../styles/AboutApto.css'
import { aptoList } from '../datas/aptoList'


function AboutApto() {
	return (
			<div className='gallerybackgroud'>
				{aptoList.map((apto) => (
					<div key={apto.id} className='apto-list'>
						<img src={apto.cover} alt='Kasa Logo' className="apto-img"/>
						<div className='Gallery2'>{apto.title}</div>
					</div>
				))}
			</div>
	)
}
export default AboutApto