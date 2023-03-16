import '../styles/Banner.css'
import { Link } from 'react-router-dom'

function Banner() {
	return (
		<nav className="banner">
		<li className="space">
		<Link to="/Banner">Accueil</Link>
		</li>
		<li className="space">
		<Link to="/Banner">A Propos</Link>
		</li>
		</nav>
	)
}

export default Banner