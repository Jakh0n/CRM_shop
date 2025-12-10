import { useEffect, useState } from 'react'
import { fetchCategories } from '../services/api'

export function useCategories() {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		setError(null)

		fetchCategories()
			.then(data => {
				setCategories(data)
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [])

	return { categories, loading, error }
}
