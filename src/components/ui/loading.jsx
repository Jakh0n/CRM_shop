import { Loader2 } from 'lucide-react'

export function Loading() {
	return (
		<div className='flex items-center justify-center py-12'>
			<Loader2 className='w-8 h-8 animate-spin text-primary-600' />
		</div>
	)
}

export function LoadingCard() {
	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden animate-pulse'>
			<div className='h-48 md:h-56 bg-gray-200' />
			<div className='p-4 space-y-3'>
				<div className='h-4 bg-gray-200 rounded w-3/4' />
				<div className='h-3 bg-gray-200 rounded w-full' />
				<div className='h-3 bg-gray-200 rounded w-2/3' />
				<div className='flex justify-between items-center'>
					<div className='h-6 bg-gray-200 rounded w-20' />
					<div className='h-8 bg-gray-200 rounded w-24' />
				</div>
			</div>
		</div>
	)
}
