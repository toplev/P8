import '../styles/Footer.css'
import logo from '../images/LOGOBlack.png'


function Footer() {
	return (
        <div className="Footer">
		<img src={logo} alt='Kasa Logo' className="Footerimage"/>
        <p className="Notfoundtext">© 2023 Kasa. All rights reserved</p>
        </div>
	)
}
export default Footer