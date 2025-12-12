import { UserButton, useUser } from '@clerk/clerk-react'
import { Menu, Search, User } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

function Header({ onMenuClick }) {
	const [searchParams, setSearchParams] = useSearchParams()
	const searchQuery = searchParams.get('q') || ''
	const { user, isLoaded } = useUser()
	const navigate = useNavigate()

	const handleSearchChange = e => {
		const value = e.target.value
		if (value) {
			setSearchParams({ q: value })
		} else {
			setSearchParams({})
		}
	}

	const getUserDisplayName = () => {
		if (!isLoaded) return 'Yuklanmoqda...'
		if (!user) return 'Foydalanuvchi'
		return (
			user.fullName ||
			user.firstName ||
			user.emailAddresses[0]?.emailAddress ||
			'Foydalanuvchi'
		)
	}

	return (
		<header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40'>
			<div className='px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 lg:px-8'>
				{/* Mobile Layout */}
				<div className='flex md:hidden items-center gap-2'>
					<Button
						variant='ghost'
						size='icon'
						onClick={onMenuClick}
						className='h-9 w-9 flex-shrink-0 p-0'
						aria-label='Menu'
					>
						<Menu className='w-5 h-5 text-gray-700' />
					</Button>
					<div className='flex-1 relative min-w-0'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10' />
						<Input
							type='text'
							placeholder='Mahsulot qidirish...'
							value={searchQuery}
							onChange={handleSearchChange}
							className='w-full pl-10 pr-3 h-9 text-sm border-gray-300 focus:border-primary-500'
						/>
					</div>
					<div className='flex-shrink-0 ml-2'>
						{isLoaded && user ? (
							<UserButton
								appearance={{
									elements: {
										avatarBox: 'w-9 h-9',
									},
								}}
							/>
						) : (
							<Button
								variant='ghost'
								size='icon'
								onClick={() => navigate('/sign-in')}
								className='h-9 w-9 p-0'
								aria-label='Kirish'
							>
								<User className='w-5 h-5 text-primary-700' />
							</Button>
						)}
					</div>
				</div>

				{/* Desktop Layout */}
				<div className='hidden md:flex items-center justify-between gap-3'>
					<div className='flex items-center gap-3 flex-1 lg:max-w-md'>
						<Button
							variant='ghost'
							size='icon'
							onClick={onMenuClick}
							className='lg:hidden h-9 w-9 flex-shrink-0'
							aria-label='Menu'
						>
							<Menu className='w-5 h-5 text-gray-700' />
						</Button>
						<div className='flex-1 relative min-w-0'>
							<Search className='absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10' />
							<Input
								type='text'
								placeholder='Mahsulot qidirish...'
								value={searchQuery}
								onChange={handleSearchChange}
								className='w-full pl-9 pr-3 h-9 text-sm'
							/>
						</div>
					</div>
					<div className='flex items-center gap-3 flex-shrink-0'>
						{isLoaded && user && (
							<>
								<Button
									variant='ghost'
									onClick={() => navigate('/orders')}
									className='hidden md:flex h-9 px-3 text-sm'
								>
									Buyurtmalarim
								</Button>
								<div className='text-right hidden lg:block'>
									<p className='text-sm font-semibold text-gray-900 leading-tight'>
										{getUserDisplayName()}
									</p>
									{user.primaryEmailAddress && (
										<p className='text-xs text-gray-600 leading-tight'>
											{user.primaryEmailAddress.emailAddress}
										</p>
									)}
								</div>
							</>
						)}
						<div className='flex-shrink-0'>
							{isLoaded && user ? (
								<UserButton
									appearance={{
										elements: {
											avatarBox: 'w-9 h-9',
										},
									}}
								/>
							) : (
								<Button
									variant='outline'
									onClick={() => navigate('/sign-in')}
									className='h-9 px-3 text-sm'
								>
									Kirish
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
