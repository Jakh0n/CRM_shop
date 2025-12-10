import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCategories } from '../../hooks/useCategories'
import { Button } from '../ui/button'
import { Loading } from '../ui/loading'

function Sidebar({ isOpen, onClose }) {
	const navigate = useNavigate()
	const { categoryId: currentCategoryId } = useParams()
	const { categories, loading } = useCategories()

	const handleCategoryClick = useCallback(
		categoryId => {
			navigate(`/category/${categoryId}`)
			onClose()
		},
		[navigate, onClose]
	)

	// Prevent body scroll when mobile sidebar is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	// Memoize category buttons to prevent unnecessary re-renders
	const categoryButtons = useMemo(
		() =>
			categories.map(category => (
				<Button
					key={category.id}
					onClick={() => handleCategoryClick(category.id)}
					variant={currentCategoryId === category.id ? 'default' : 'ghost'}
					className={cn(
						'w-full justify-start gap-2 sm:gap-2.5 h-9 sm:h-10 text-xs sm:text-sm transition-colors',
						currentCategoryId === category.id &&
							'bg-primary-600 hover:bg-primary-700 text-white shadow-sm'
					)}
				>
					<span className='text-lg sm:text-xl flex-shrink-0'>
						{category.icon}
					</span>
					<span className='font-medium truncate'>{category.name}</span>
				</Button>
			)),
		[categories, currentCategoryId, handleCategoryClick]
	)

	return (
		<>
			<aside
				className={cn(
					'fixed md:static inset-y-0 left-0 z-50',
					'w-56 sm:w-64 lg:w-72',
					'bg-white shadow-lg md:shadow-sm border-r border-gray-200',
					'p-3 sm:p-4 md:p-6',
					'transform transition-transform duration-300 ease-in-out',
					'overflow-y-auto overscroll-contain',
					// Mobile: slide in/out
					'md:translate-x-0',
					isOpen ? 'translate-x-0' : '-translate-x-full',
					// Performance optimization
					'will-change-transform'
				)}
				aria-label='Navigation sidebar'
				aria-hidden={!isOpen && window.innerWidth < 768}
			>
				{loading ? (
					<div className='flex items-center justify-center h-full'>
						<Loading />
					</div>
				) : (
					<>
						<div className='flex items-center justify-between mb-3 sm:mb-4 md:mb-5'>
							<h2 className='text-sm sm:text-base md:text-lg font-bold text-gray-900'>
								Kategoriyalar
							</h2>
							<Button
								variant='ghost'
								size='icon'
								onClick={onClose}
								className='md:hidden h-8 w-8 flex-shrink-0'
								aria-label='Yopish'
							>
								<X className='w-4 h-4 sm:w-5 sm:h-5 text-gray-700' />
							</Button>
						</div>
						<nav
							className='space-y-1 sm:space-y-1.5'
							aria-label="Kategoriyalar ro'yxati"
						>
							{categoryButtons}
						</nav>
					</>
				)}
			</aside>
		</>
	)
}

export default Sidebar
