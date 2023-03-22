import '../styles/Banner.css'
import banner1 from '../images/banner1.png'


function Banner() {
	return (
		<header>
		<div className="Banner">
		<img src={banner1} alt='Kasa Logo' className="img"/></div>
		<p className='text'>Chez vous, partout et ailleurs</p>
	  	</header>
	)
}
export default Banner

