import { createContext, useContext, useReducer } from 'react'

const ShopContext = createContext()

const initialState = {
	cart: [],
}

function shopReducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const existingItem = state.cart.find(
				item => item.id === action.payload.id
			)
			if (existingItem) {
				return {
					...state,
					cart: state.cart.map(item =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				}
			}
			return {
				...state,
				cart: [...state.cart, { ...action.payload, quantity: 1 }],
			}
		}

		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			}

		case 'UPDATE_QUANTITY':
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload.id
						? { ...item, quantity: action.payload.quantity }
						: item
				),
			}

		case 'CLEAR_CART':
			return {
				...state,
				cart: [],
			}

		default:
			return state
	}
}

export function ShopProvider({ children }) {
	const [state, dispatch] = useReducer(shopReducer, initialState)

	const addToCart = product => {
		dispatch({ type: 'ADD_TO_CART', payload: product })
	}

	const removeFromCart = productId => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
	}

	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			removeFromCart(productId)
		} else {
			dispatch({
				type: 'UPDATE_QUANTITY',
				payload: { id: productId, quantity },
			})
		}
	}

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}

	const getTotalPrice = () => {
		return state.cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	const getTotalItems = () => {
		return state.cart.reduce((total, item) => total + item.quantity, 0)
	}

	const value = {
		...state,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getTotalPrice,
		getTotalItems,
	}

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShop() {
	const context = useContext(ShopContext)
	if (!context) {
		throw new Error('useShop must be used within a ShopProvider')
	}
	return context
}
