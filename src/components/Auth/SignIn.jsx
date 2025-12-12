import { SignIn } from '@clerk/clerk-react'
import { useLocation } from 'react-router-dom'

function SignInPage() {
	const location = useLocation()
	// Get the previous location from state, or default to category page
	const from = location.state?.from?.pathname || '/category/qahva'

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
			<div className='w-full max-w-md'>
				<SignIn
					routing='path'
					path='/sign-in'
					signUpUrl='/sign-up'
					afterSignInUrl={from}
					appearance={{
						elements: {
							rootBox: 'mx-auto',
							card: 'shadow-lg',
						},
					}}
				/>
			</div>
		</div>
	)
}

export default SignInPage
