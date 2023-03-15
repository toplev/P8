import RealEstateList from './RealEstateList'
import { Link } from 'react-router-dom'


function App() {
	return (
		<nav>
			<Link to="/App">Banner</Link>
			<RealEstateList />
		</nav>
	)
}

export default App