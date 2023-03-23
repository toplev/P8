import '../styles/Gallery.css'
import { Link } from 'react-router-dom'


const Card = ({marcel, image}) => {
console.log (marcel, image)
return (
    <Link to={`/service/${marcel.id}`} className='apto-list' >
        <article className='apto-list'>
        <img src={image + marcel.id} alt={marcel.nom} />
        <div>{marcel.nom}</div>
        </article>
        </Link>  
);
}

export default Card
