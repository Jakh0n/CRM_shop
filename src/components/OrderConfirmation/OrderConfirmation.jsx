import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useShop } from '../../context/ShopContext'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog'
import { Separator } from '../ui/separator'

function OrderConfirmation({ open, onOpenChange }) {
	const { cart, getTotalPrice, clearCart, addOrder } = useShop()
	const { user } = useUser()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)

	const totalPrice = getTotalPrice()

	const handleConfirm = async () => {
		setLoading(true)

		// Order yaratish
		const orderId = `ORD-${Date.now()}`
		const order = {
			id: orderId,
			userId: user?.id || 'guest',
			items: cart.map(item => ({
				id: item.id,
				name: item.name,
				image: item.image,
				price: item.price,
				quantity: item.quantity,
			})),
			totalPrice,
			status: 'pending',
			createdAt: new Date().toISOString(),
		}

		// Order'ni saqlash
		addOrder(order)

		// Cart'ni tozalash
		clearCart()

		setLoading(false)
		onOpenChange(false)

		// Success toast
		toast.success('Buyurtma muvaffaqiyatli berildi!', {
			description: `Buyurtma raqami: ${orderId}`,
			duration: 3000,
		})

		// Order history'ga o'tish
		setTimeout(() => {
			navigate('/orders')
		}, 500)
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='sm:max-w-[500px] max-h-[90vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle>Buyurtmani tasdiqlash</DialogTitle>
					<DialogDescription>
						Buyurtma ma&apos;lumotlarini tekshiring
					</DialogDescription>
				</DialogHeader>

				<div className='space-y-4 py-4'>
					{/* Buyurtma mahsulotlari */}
					<div className='space-y-2'>
						<h4 className='text-sm font-semibold'>Buyurtma mahsulotlari:</h4>
						<div className='space-y-2 max-h-[200px] overflow-y-auto'>
							{cart.map(item => (
								<div
									key={item.id}
									className='flex items-center gap-3 p-2 bg-gray-50 rounded'
								>
									<img
										src={item.image}
										alt={item.name}
										className='w-12 h-12 rounded object-cover'
									/>
									<div className='flex-1'>
										<p className='text-sm font-medium'>{item.name}</p>
										<p className='text-xs text-gray-600'>
											{item.quantity} x {item.price} so&apos;m
										</p>
									</div>
									<p className='text-sm font-semibold'>
										{item.price * item.quantity} so&apos;m
									</p>
								</div>
							))}
						</div>
					</div>

					<Separator />

					{/* Jami narx */}
					<div className='flex justify-between items-center'>
						<span className='text-lg font-semibold'>Jami:</span>
						<span className='text-lg font-bold text-primary-600'>
							{totalPrice} so&apos;m
						</span>
					</div>
				</div>

				<DialogFooter>
					<Button
						variant='outline'
						onClick={() => onOpenChange(false)}
						disabled={loading}
					>
						Bekor qilish
					</Button>
					<Button
						onClick={handleConfirm}
						disabled={loading}
						className='bg-primary-600 hover:bg-primary-700'
					>
						{loading ? 'Tasdiqlanmoqda...' : 'Tasdiqlash'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default OrderConfirmation
