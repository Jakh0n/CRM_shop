import { useAuth } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children }) {
	const { isLoaded, isSignedIn } = useAuth()
	const location = useLocation()

	// Loading state
	if (!isLoaded) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-gray-50'>
				<div className='text-center'>
					<div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent'></div>
					<p className='mt-4 text-gray-600'>Yuklanmoqda...</p>
				</div>
			</div>
		)
	}

	// If not signed in, redirect to sign-in page
	if (!isSignedIn) {
		// Save the current location to redirect back after sign-in
		return (
			<Navigate
				to='/sign-in'
				state={{ from: location }}
				replace
			/>
		)
	}

	// User is signed in, render the protected content
	return children
}

export default ProtectedRoute

