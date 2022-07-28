import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'

import Page404 from './views/NotFound/404'
import SearchPage from './views/Search'
import AddPlace from './views/AddPace/'
import Add from './views/AddPace/Add'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<SearchPage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/add-place' element={<AddPlace />} />
				<Route path='/add-temple' element={<Add />} />
				<Route path='/*' element={<Page404 />} />
			</Routes>
		</Layout>
	)
}

export default App
