export const categories = [
	{
		id: 'qahva',
		name: 'Qahva',
		nameRu: 'Кофе',
		icon: '☕',
	},
	{
		id: 'pechenye',
		name: 'Pechenye',
		nameRu: 'Печенье',
		icon: '🍪',
	},
	{
		id: 'shirinliklar',
		name: 'Shirinliklar',
		nameRu: 'Сладости',
		icon: '🎂',
	},
	{
		id: 'ichimliklar',
		name: 'Ichimliklar',
		nameRu: 'Напитки',
		icon: '🥤',
	},
]

export const products = [
	// Qahva (Coffee)
	{
		id: 1,
		categoryId: 'qahva',
		name: 'Espresso',
		description: "Klassik italyan qahvasi, to'yimli va aromatli",
		price: 120,
		image:
			'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
	},
	{
		id: 2,
		categoryId: 'qahva',
		name: 'Kapuchino',
		description: "Espresso sutli ko'pik va chiroyli latte-art bilan",
		price: 180,
		image:
			'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
	},
	{
		id: 3,
		categoryId: 'qahva',
		name: 'Sovuq qahva',
		description: 'Muz va sut bilan sovuq va tetiklantiruvchi',
		price: 200,
		image:
			'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
	},
	{
		id: 4,
		categoryId: 'qahva',
		name: 'Amerikano',
		description: "Issiq suv qo'shilgan espresso",
		price: 140,
		image:
			'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
	},
	// Ichimliklar (Drinks)
	{
		id: 5,
		categoryId: 'ichimliklar',
		name: 'Apelsin sharbati',
		description: 'Tabiiy apelsin sharbati',
		price: 160,
		image:
			'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
	},
	{
		id: 6,
		categoryId: 'ichimliklar',
		name: 'Yashil choy',
		description: "Sog'liq uchun foydali yashil choy",
		price: 110,
		image:
			'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
	},
	{
		id: 7,
		categoryId: 'ichimliklar',
		name: 'Limonad',
		description: 'Sovuq va tetiklantiruvchi limonad',
		price: 140,
		image:
			'https://images.unsplash.com/photo-1523677011783-c91d1bbe2fdc?w=400&h=300&fit=crop',
	},
	// Pechenye (Cookies)
	{
		id: 8,
		categoryId: 'pechenye',
		name: 'Shokoladli pechenye',
		description: 'Yumshoq shokoladli pechenye',
		price: 90,
		image:
			'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
	},
	{
		id: 9,
		categoryId: 'pechenye',
		name: 'Oatmeal pechenye',
		description: "Sog'lom oatmeal pechenye",
		price: 100,
		image:
			'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
	},
	// Shirinliklar (Sweets)
	{
		id: 10,
		categoryId: 'shirinliklar',
		name: 'Cheesecake',
		description: 'Klassik cheesecake',
		price: 250,
		image:
			'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop',
	},
	{
		id: 11,
		categoryId: 'shirinliklar',
		name: 'Tiramisu',
		description: 'Italyan tiramisu',
		price: 280,
		image:
			'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
	},
]
