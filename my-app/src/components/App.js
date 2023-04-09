import Home from '../pages/Home'
import About from '../pages/About'
import Apto from '../pages/Apto'
import NotFound from '../pages/NotFound'

import {Routes, Route} from "react-router-dom"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/Home" element={<Home />}/>
				<Route path="/About" element={<About />}/>
				<Route path="/Apto/:id" element={<Apto />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</div>
	)
}

export default App