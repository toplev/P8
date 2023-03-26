import '../styles/Apto.css'
import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";

const Service = () => {
	const idinlist = useParams ('id').id;
	const idnow = aptoList.filter(data => data.id === idinlist)
	const fullStars = parseInt(idnow[0].rating);
	const emptyStars = 5 - fullStars;

  const getStarRating = () => {
    return [
		...Array(fullStars).fill(<span className="star-rating">★</span>),
   		 ...Array(emptyStars).fill(<span className="empty-star-rating">★</span>),
    ];
  };

	return (
		<div>
			<div className='lmj-plant-list'>
			<img src={idnow[0].cover} alt='Kasa Logo' className="apto-img"/>
			<div>
			<h3 className="apto-text">{idnow[0].title}</h3>
			<h1 className="apto-text2">{idnow[0].location}</h1>
			<h1 className="apto-text2">{idnow[0].host.name}</h1>
			<img src={idnow[0].host.picture} alt='Kasa Logo' className="apto-img2"/>
			{getStarRating().map((star, index) => (
  <span key={index} className="star-rating">{star}</span>
))}			<div>

{idnow[0].tags.map((tag, index) => (
  <button key={index}className="button-text2">{tag}</button>
))}			</div>

			</div>
			</div>
		</div>
	)
}

export default Service
