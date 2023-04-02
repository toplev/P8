import '../styles/LinkPage.css'
import { NavLink } from 'react-router-dom'

function LinkPage() {
	return (
		<nav className="linkpage">
		<li className="space">
		<NavLink exact to="/home" activeClassName="active" className="textcolor">Accueil</NavLink>
		</li>
		<li className="space">
		<NavLink exact to="/about" activeClassName="active" className="textcolor">A Propos</NavLink>
		</li>
		</nav>
	)
}

export default LinkPage