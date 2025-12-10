import { useParams, useSearchParams } from 'react-router-dom'
import { useCategories } from '../../hooks/useCategories'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard/ProductCard'
import { ErrorMessage } from '../ui/error'
import { LoadingCard } from '../ui/loading'

function ProductList() {
	const { categoryId } = useParams()
	const [searchParams] = useSearchParams()
	const searchQuery = searchParams.get('q') || ''

	const { products, loading, error } = useProducts(categoryId, searchQuery)
	const { categories } = useCategories()

	const currentCategory = categories.find(cat => cat.id === categoryId)

	if (loading) {
		return (
			<div>
				<div className='mb-4 sm:mb-5 md:mb-6'>
					<div className='h-6 sm:h-7 md:h-8 bg-gray-200 rounded w-40 sm:w-48 mb-2 animate-pulse' />
					<div className='h-3 sm:h-4 bg-gray-200 rounded w-20 sm:w-24 animate-pulse' />
				</div>
				<div className='grid max-sm:grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5'>
					{[...Array(6)].map((_, i) => (
						<LoadingCard key={i} />
					))}
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<ErrorMessage message={error} onRetry={() => window.location.reload()} />
		)
	}

	return (
		<div>
			<div className='mb-3 sm:mb-4 md:mb-5'>
				<h1 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1'>
					{currentCategory?.nameRu || currentCategory?.name || 'Mahsulotlar'}
				</h1>
				<p className='text-xs sm:text-sm text-gray-500'>
					{products.length} товаров
				</p>
			</div>
			{products.length > 0 ? (
				<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4'>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			) : (
				<div className='text-center py-8 sm:py-10 md:py-12'>
					<p className='text-xs sm:text-sm text-gray-500'>Mahsulot topilmadi</p>
				</div>
			)}
		</div>
	)
}

export default ProductList
