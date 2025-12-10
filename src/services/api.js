// API Service Layer - Real loyihalarda bu yerda API call'lar bo'ladi

// Simulated API delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Real loyihada bu fetch/axios bilan API'ga so'rov yuboriladi
export async function fetchCategories() {
	await delay(300) // Simulated network delay
	const { categories } = await import('../data/products')
	return categories
}

export async function fetchProducts(categoryId = null, searchQuery = '') {
	await delay(300) // Simulated network delay
	const { products } = await import('../data/products')

	let filtered = products

	if (categoryId) {
		filtered = filtered.filter(p => p.categoryId === categoryId)
	}

	if (searchQuery) {
		const query = searchQuery.toLowerCase()
		filtered = filtered.filter(
			p =>
				p.name.toLowerCase().includes(query) ||
				p.description.toLowerCase().includes(query)
		)
	}

	return filtered
}

export async function fetchProductById(id) {
	await delay(200)
	const { products } = await import('../data/products')
	return products.find(p => p.id === id)
}
