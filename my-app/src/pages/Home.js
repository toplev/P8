import '../styles/Banner.css'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<nav className="banner">
		<li className="space">
		<Link to="/home">Accueil</Link>
		</li>
		<li className="space">
		<Link to="/about">A Propos</Link>
		</li>
		</nav>
	)
}

export default Home