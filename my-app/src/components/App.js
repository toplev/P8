import Header from './Header'
import Banner from './Banner'
import RealEstateList from './RealEstateList'
import { Link } from 'react-router-dom'


function App() {
	return (
		<div>
			<Header />
			<Link to="/Banner">Banner</Link>
			<Banner />
			<RealEstateList />
		</div>
	)
}

export default App