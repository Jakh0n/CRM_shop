import { ShoppingCart, X } from 'lucide-react'
import { toast } from 'sonner'
import { useShop } from '../../context/ShopContext'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function CartBar() {
	const { cart, removeFromCart, getTotalPrice, getTotalItems, clearCart } =
		useShop()

	const totalPrice = getTotalPrice()
	const totalItems = getTotalItems()

	const handleOrder = () => {
		if (cart.length > 0) {
			toast.success('Buyurtma berildi!', {
				description: `Jami: ${totalPrice} so'm`,
				duration: 3000,
			})
			clearCart()
		}
	}

	return (
		<div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 lg:px-8 z-50'>
			<div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-2 sm:gap-3 max-w-full'>
				{/* Chap tomon - Savat info yoki productlar */}
				{cart.length > 0 ? (
					<div className='w-full md:flex-1 min-w-0'>
						{/* Savat header - tepada */}
						<div className='flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-shrink-0'>
							<ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0' />
							<span className='text-xs sm:text-sm font-semibold text-gray-900'>
								Savat
							</span>
							<Badge
								variant='default'
								className='text-xs h-4 sm:h-5 px-1.5 sm:px-2 bg-primary-600 text-white flex-shrink-0'
							>
								{totalItems}
							</Badge>
						</div>
						{/* Product cards - slider */}
						<div className='overflow-x-auto scrollbar-hide -mx-3 px-3 sm:-mx-4 sm:px-4 md:mx-0 md:px-0'>
							<div className='flex gap-1.5 sm:gap-2'>
								{cart.map(item => (
									<div
										key={item.id}
										className='flex items-center gap-1.5 sm:gap-2 bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 min-w-[160px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] flex-shrink-0 shadow-sm border border-gray-200'
									>
										<img
											src={item.image}
											alt={item.name}
											className='w-8 h-8 sm:w-10 sm:h-10 rounded object-cover flex-shrink-0'
										/>
										<div className='flex-1 min-w-0'>
											<p className='text-xs font-medium text-gray-900 truncate mb-0.5'>
												{item.name}
											</p>
											<p className='text-xs text-gray-600 whitespace-nowrap'>
												{item.quantity} x {item.price} so&apos;m
											</p>
										</div>
										<Button
											variant='ghost'
											size='icon'
											onClick={() => {
												removeFromCart(item.id)
												toast.success(`${item.name} savatdan olib tashlandi`)
											}}
											className='h-5 w-5 sm:h-6 sm:w-6 p-0 text-gray-400 hover:text-red-600 flex-shrink-0'
											aria-label='Olib tashlash'
										>
											<X className='w-3 h-3 sm:w-4 sm:h-4' />
										</Button>
									</div>
								))}
							</div>
						</div>
					</div>
				) : (
					<div className='flex flex-col gap-0.5 sm:gap-1 w-full md:w-auto'>
						<div className='flex items-center gap-1.5 sm:gap-2'>
							<ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5 text-primary-600' />
							<span className='text-xs sm:text-sm font-semibold text-gray-900'>
								Savat
							</span>
						</div>
						<span className='text-xs text-gray-500 ml-5 sm:ml-7'>
							Savat bo&apos;sh
						</span>
					</div>
				)}

				{/* O'ng tomon - Jami va button */}
				<div className='flex items-center gap-2 sm:gap-3 md:gap-4 w-full md:w-auto justify-between md:justify-end flex-shrink-0'>
					<div className='text-right'>
						<p className='text-xs text-gray-500'>Jami</p>
						<p
							className={`text-sm sm:text-base md:text-lg font-bold ${
								cart.length === 0 ? 'text-primary-600' : 'text-gray-900'
							}`}
						>
							{totalPrice} so&apos;m
						</p>
					</div>
					<Button
						onClick={handleOrder}
						disabled={cart.length === 0}
						className='px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:text-gray-500 whitespace-nowrap'
					>
						Buyurtma berish
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CartBar
