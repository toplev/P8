import "../styles/NotFound.css"
import { NavLink } from "react-router-dom"

function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="NotFound404">404</h1>
      <p className="NotFoundText">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink exact="true" to="/home" className="NotFoundTextRetour">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}
export default NotFound
