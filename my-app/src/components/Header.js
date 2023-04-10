import "../styles/Header.css"
import logo from "../images/LOGO.png"
import LinkPage from "./LinkPage"

function Header() {
  return (
    <header className="header">
      <a href="/home">
        <img src={logo} alt="Kasa Logo" className="logo" />
      </a>
      <LinkPage />
    </header>
  )
}
export default Header
