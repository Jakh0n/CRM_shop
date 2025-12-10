import { AlertCircle } from 'lucide-react'
import { Button } from './button'

export function ErrorMessage({ message, onRetry }) {
	return (
		<div className='flex flex-col items-center justify-center py-12'>
			<AlertCircle className='w-12 h-12 text-red-500 mb-4' />
			<p className='text-gray-600 mb-4'>{message || 'Xatolik yuz berdi'}</p>
			{onRetry && (
				<Button onClick={onRetry} variant='outline'>
					Qayta urinib ko&apos;ring
				</Button>
			)}
		</div>
	)
}
