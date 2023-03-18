import '../styles/Gallery.css'
import { aptoList } from '../datas/aptoList'


function Gallery() {
	return (
			<div className='gallerybackgroud'>
				{aptoList.map((apto) => (
					<div key={apto.id} className='lmj-sales'>
                       <img src={apto.cover} alt='Kasa Logo' className="lmj-plant-item"/>
						<div className='Gallery2'>{apto.title}</div>
					</div>
				))}
			</div>
	)
}
export default Gallery
