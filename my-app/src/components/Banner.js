import '../styles/Banner.css'
import { useParams } from "react-router-dom";
import banner1 from '../images/banner1.png'
import { useEffect } from 'react'

function Banner() {
	const idinlist = useParams ('/Home');
	console.log(idinlist)

	useEffect(() => {
		if (idinlist === '/Home')
		console.log(useEffect)
		console.log('alert')
	},)

	return (
		<header>
		<div className="Banner">
		<img src={banner1} alt='Kasa Logo' className="img"/></div>
		<p className='text'>Chez vous, partout et ailleurs</p>
	  	</header>
	)
}
export default Banner

