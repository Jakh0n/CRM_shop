import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/category/qahva' replace />} />
			<Route path='category/:categoryId' element={<Layout />} />
		</Routes>
	)
}

export default App
