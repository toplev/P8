import '../styles/LinkPage.css'
import { Link } from 'react-router-dom'

function LinkPage() {
	return (
		<nav className="linkpage">
		<li className="space">
		<Link to="/home" className="textcolor">Accueil</Link>
		</li>
		<li className="space">
		<Link to="/about" className="textcolor">A Propos</Link>
		</li>
		</nav>
	)
}

export default LinkPage