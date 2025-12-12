import { SignUp } from '@clerk/clerk-react'

function SignUpPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
			<div className='w-full max-w-md'>
				<SignUp
					routing='path'
					path='/sign-up'
					signInUrl='/sign-in'
					afterSignUpUrl='/category/qahva'
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

export default SignUpPage
