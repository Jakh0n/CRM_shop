import { useShop } from '../../context/ShopContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { ArrowLeft, Package } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const statusLabels = {
	pending: { label: 'Kutilmoqda', color: 'bg-yellow-500' },
	preparing: { label: 'Tayyorlanmoqda', color: 'bg-blue-500' },
	ready: { label: 'Tayyor', color: 'bg-green-500' },
	delivered: { label: 'Yetkazildi', color: 'bg-gray-500' },
}

function OrderHistory() {
	const { getOrders } = useShop()
	const orders = getOrders()
	const navigate = useNavigate()

	const formatDate = dateString => {
		const date = new Date(dateString)
		return date.toLocaleString('uz-UZ', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		})
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white border-b border-gray-200 sticky top-0 z-40">
				<div className="px-4 py-3 sm:px-6 lg:px-8">
					<div className="flex items-center gap-3">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => navigate('/category/qahva')}
							className="h-9 w-9"
						>
							<ArrowLeft className="w-5 h-5" />
						</Button>
						<h1 className="text-xl font-bold">Buyurtmalar tarixi</h1>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="px-4 py-6 sm:px-6 lg:px-8 max-w-4xl mx-auto">
				{orders.length === 0 ? (
					<Card>
						<CardContent className="flex flex-col items-center justify-center py-12">
							<Package className="w-16 h-16 text-gray-400 mb-4" />
							<h3 className="text-lg font-semibold mb-2">Buyurtmalar yo'q</h3>
							<p className="text-sm text-gray-600 mb-4">
								Siz hali hech qanday buyurtma bermadingiz
							</p>
							<Button onClick={() => navigate('/category/qahva')}>
								Mahsulotlar sahifasiga o'tish
							</Button>
						</CardContent>
					</Card>
				) : (
					<div className="space-y-4">
						{orders.map(order => {
							const status = statusLabels[order.status] || statusLabels.pending
							return (
								<Card key={order.id}>
									<CardHeader>
										<div className="flex items-start justify-between">
											<div>
												<CardTitle className="text-lg">
													Buyurtma #{order.id.slice(-6)}
												</CardTitle>
												<CardDescription>
													{formatDate(order.createdAt)}
												</CardDescription>
											</div>
											<Badge className={status.color}>
												{status.label}
											</Badge>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										{/* Mahsulotlar */}
										<div className="space-y-2">
											{order.items.map(item => (
												<div
													key={item.id}
													className="flex items-center gap-3 p-2 bg-gray-50 rounded"
												>
													<img
														src={item.image}
														alt={item.name}
														className="w-12 h-12 rounded object-cover"
													/>
													<div className="flex-1">
														<p className="text-sm font-medium">{item.name}</p>
														<p className="text-xs text-gray-600">
															{item.quantity} x {item.price} so'm
														</p>
													</div>
													<p className="text-sm font-semibold">
														{item.price * item.quantity} so'm
													</p>
												</div>
											))}
										</div>

										<Separator />

										{/* Jami */}
										<div className="flex justify-between items-center">
											<span className="text-lg font-semibold">Jami:</span>
											<span className="text-xl font-bold text-primary-600">
												{order.totalPrice} so'm
											</span>
										</div>
									</CardContent>
								</Card>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default OrderHistory

