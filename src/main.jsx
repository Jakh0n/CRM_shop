import { ClerkProvider } from '@clerk/clerk-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Toaster } from './components/ui/toaster'
import { ShopProvider } from './context/ShopContext'
import './index.css'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<BrowserRouter>
				<ShopProvider>
					<App />
					<Toaster position='top-right' />
				</ShopProvider>
			</BrowserRouter>
		</ClerkProvider>
	</React.StrictMode>
)
