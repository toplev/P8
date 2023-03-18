import '../styles/Header.css'
import logo from '../images/LOGO.png'
import LinkPage from './LinkPage'

function Header() {
	return (
		<header className="header"><a href="/Home">
		<img src={logo} alt='Kasa Logo'/></a>
		<LinkPage />
	  	</header>
	)
}
export default Header