import { Minus, Plus } from 'lucide-react'
import { useShop } from '../../context/ShopContext'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

function ProductCard({ product }) {
	const { cart, addToCart, updateQuantity } = useShop()
	const cartItem = cart.find(item => item.id === product.id)
	const quantity = cartItem?.quantity || 0

	const handleIncrement = () => {
		if (quantity === 0) {
			addToCart(product)
		} else {
			updateQuantity(product.id, quantity + 1)
		}
	}

	const handleDecrement = () => {
		if (quantity > 0) {
			updateQuantity(product.id, quantity - 1)
		}
	}

	return (
		<Card className='overflow-hidden hover:shadow-lg transition-all hover:border-primary-400 border border-gray-200 cursor-pointer h-full flex flex-col'>
			<div className='relative h-32 xs:h-36 sm:h-36 md:h-40 overflow-hidden bg-gray-200 flex-shrink-0'>
				<img
					src={product.image}
					alt={product.name}
					className='w-full h-full object-cover transition-transform hover:scale-105'
					onError={e => {
						e.target.src = 'https://via.placeholder.com/400x300?text=Product'
					}}
				/>
			</div>
			<CardContent className='p-2.5 sm:p-3 flex-1 flex flex-col'>
				<h3 className='text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-1'>
					{product.name}
				</h3>
				<p className='text-xs text-gray-600 mb-2 sm:mb-3 line-clamp-1 leading-relaxed flex-shrink-0'>
					{product.description}
				</p>
				<div className='flex items-center justify-between mt-auto'>
					<span className='text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap'>
						{product.price} so&apos;m
					</span>
					<div className='flex items-center gap-1 sm:gap-1.5 flex-shrink-0'>
						<Button
							variant='outline'
							size='icon'
							onClick={handleDecrement}
							disabled={quantity === 0}
							className='w-6 h-6 sm:w-7 sm:h-7 hover:bg-gray-100 p-0'
							aria-label='Kamaytirish'
						>
							<Minus className='w-3 h-3 sm:w-3.5 sm:h-3.5' />
						</Button>
						<span className='w-5 sm:w-6 text-center text-xs sm:text-sm font-medium text-gray-700'>
							{quantity}
						</span>
						<Button
							size='icon'
							onClick={handleIncrement}
							className='w-6 h-6 sm:w-7 sm:h-7 bg-primary-600 hover:bg-primary-700 text-white p-0'
							aria-label="Ko'paytirish"
						>
							<Plus className='w-3 h-3 sm:w-3.5 sm:h-3.5' />
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductCard
