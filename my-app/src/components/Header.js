import '../styles/Header.css'
import logo from '../images/LOGO.png'
import Banner from '../components/Banner'

function Header() {
	return (
		<header className="header">
		<img src={logo} alt='Kasa Logo'/>
		<Banner />
	  	</header>
	)
}

export default Header