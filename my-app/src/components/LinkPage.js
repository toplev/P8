import '../styles/LinkPage.css'
import { NavLink } from 'react-router-dom'

function LinkPage() {
  return (
    <nav className="linkpage">
      <li className="space">
        <NavLink exact="true" to="/home"  className="textcolor">Accueil</NavLink>
      </li>
      <li className="space">
        <NavLink exact="true" to="/about" className="textcolor">A Propos</NavLink>
      </li>
    </nav>
  )
}

export default LinkPage
