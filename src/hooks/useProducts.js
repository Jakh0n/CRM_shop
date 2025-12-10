import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'

export function useProducts(categoryId, searchQuery) {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		setError(null)

		fetchProducts(categoryId, searchQuery)
			.then(data => {
				setProducts(data)
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [categoryId, searchQuery])

	return { products, loading, error }
}
