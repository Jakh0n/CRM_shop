import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import SignInPage from './components/Auth/SignIn'
import SignUpPage from './components/Auth/SignUp'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/category/qahva' replace />} />
			<Route
				path='category/:categoryId'
				element={
					<ProtectedRoute>
						<Layout />
					</ProtectedRoute>
				}
			/>
			<Route path='sign-in' element={<SignInPage />} />
			<Route path='sign-up' element={<SignUpPage />} />
		</Routes>
	)
}

export default App
