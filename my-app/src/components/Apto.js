import NotFound from '../components/NotFound'
import '../styles/Apto.css'
import { aptoList } from '../datas/aptoList'
import { useParams } from "react-router-dom";
import Collapse from '../components/Collapse';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

function Service () {
    const idinlist = useParams ('id').id;
    const idnow = aptoList.filter(data => data.id === idinlist)
    if (idnow.length === 0) {
        return <NotFound />;
      }
    const fullStars = parseInt(idnow[0].rating);
    const emptyStars = 5 - fullStars;

    function getStarRating () {
    return [
        ...Array(fullStars).fill(<span className="star-rating">★</span>),
         ...Array(emptyStars).fill(<span className="empty-star-rating">★</span>),
    ];
  };

    return (
            <div className='aptolist'>
            <ImageSlider />
            <div className='flexbox-containter1'>
            <div>
            <span className="apto-text">{idnow[0].title}</span>
            <span className="apto-text2">{idnow[0].location}</span>
            <div>{idnow[0].tags.map((tag, index) => (<button key={index}className="button-text2">{tag}</button>))}</div>
            </div>
            <div className='flexbox-containter2'>    
            <div className='flexbox-containter'>
            <span className="apto-text3">{idnow[0].host.name}</span>
            <img src={idnow[0].host.picture} alt='Kasa Logo' className="apto-img2"/>
            </div>    
            <div className='flexbox-containter4'>{getStarRating().map((star, index) => (
             <span key={index} className="star-rating">{star}</span>))}
             </div>       
            </div>
            </div>
            <div className='flexbox-containter5'><Collapse /></div>
            <Footer />
            </div>
    )
}

export default Service
