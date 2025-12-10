import { useState } from 'react'
import CartBar from '../CartBar/CartBar'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import Sidebar from '../Sidebar/Sidebar'

function Layout() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
			<div className='flex flex-1 overflow-hidden relative'>
				{/* Mobile sidebar overlay - optimized */}
				{sidebarOpen && (
					<div
						className='fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300'
						onClick={() => setSidebarOpen(false)}
						aria-hidden='true'
					/>
				)}
				<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
				<main className='flex-1 overflow-y-auto bg-white p-2.5 sm:p-3 md:p-4 lg:p-5 pb-20 sm:pb-24 md:pb-28'>
					<ProductList />
				</main>
			</div>
			<CartBar />
		</div>
	)
}

export default Layout
