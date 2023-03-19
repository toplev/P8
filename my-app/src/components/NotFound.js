import '../styles/NotFound.css'

function NotFound() {
	return (
        <div className="NotFound">
            <h1 className="NotFound404">404</h1>
            <p className="NotFoundText">Oups! La page que vous demandez n'existe pas.</p>
            <p className="NotFoundTextRetour">Retourner sur la page d’accueil</p>
        </div>
	)
}
export default NotFound