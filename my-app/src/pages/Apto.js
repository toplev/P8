import Apto from'../components/Apto'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFound from '../components/NotFound'

function Aptoid() {
	const isNotFound = false; // change this value to test whether Footer appears in Not Found component

	return (
		<header>
			<Header />
			{isNotFound ? <NotFound /> : <Apto />}
			{isNotFound && <Footer />}
		</header>
	)
}
export default Aptoid
