# ☕ Coffee Shop - Online Ordering System

A modern, fully responsive online ordering system for cafes and restaurants built with React, Vite, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Responsive Design](#-responsive-design)
- [Available Scripts](#-available-scripts)
- [Configuration](#-configuration)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and intuitive interface using Shadcn UI components
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 🔍 **Search Functionality** - Real-time product search
- 📂 **Category Navigation** - Easy category filtering with URL-based routing
- 💾 **Persistent Cart** - Cart state saved to localStorage
- 🔔 **Toast Notifications** - User-friendly notifications using Sonner
- ⚡ **Fast Performance** - Optimized with React hooks (useMemo, useCallback)
- 🎯 **Type Safety** - ESLint configured for code quality

## 🛠 Tech Stack

### Core

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **React Router DOM 6.20** - Client-side routing

### Styling

- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **Shadcn UI** - High-quality component library

### State Management

- **Context API** - Global state management for cart
- **React Hooks** - useState, useEffect, useMemo, useCallback

### UI Components

- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives
- **Sonner** - Toast notification system

### Utilities

- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

1. **Clone the repository** (or navigate to the project directory):

```bash
cd coffee
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm run dev
```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

## 💻 Usage

### Development

Run the development server:

```bash
npm run dev
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
coffee/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── CartBar/       # Shopping cart bottom bar
│   │   ├── Header/        # Top navigation header
│   │   ├── Layout/        # Main layout wrapper
│   │   ├── ProductCard/   # Individual product card
│   │   ├── ProductList/   # Product grid/list
│   │   ├── Sidebar/       # Category navigation sidebar
│   │   └── ui/            # Shadcn UI components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       ├── badge.jsx
│   │       ├── toaster.jsx
│   │       └── ...
│   ├── context/           # Context API
│   │   └── ShopContext.jsx # Cart state management
│   ├── data/              # Static data
│   │   └── products.js    # Products and categories
│   ├── hooks/             # Custom React hooks
│   │   ├── useCategories.js
│   │   ├── useProducts.js
│   │   └── use-mobile.jsx
│   ├── lib/               # Utility functions
│   │   └── utils.js       # Helper functions (cn, etc.)
│   ├── services/          # API services
│   │   └── api.js         # API service layer
│   ├── App.jsx            # Main app component with routes
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and Tailwind directives
├── .eslintrc.cjs          # ESLint configuration
├── components.json        # Shadcn UI configuration
├── jsconfig.json          # JavaScript/TypeScript config
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🏗 Architecture

### State Management

The application uses **Context API** for global cart state management:

- **ShopContext** (`src/context/ShopContext.jsx`):
  - Manages cart items
  - Provides cart operations (add, remove, update quantity)
  - Persists cart to localStorage
  - Calculates total price and items count

### Routing

**React Router** handles navigation:

- `/` - Redirects to default category
- `/category/:categoryId` - Category page with products
- Search query managed via URL parameters (`?q=search-term`)

### Data Fetching

Custom hooks for data management:

- **useProducts** - Fetches products with loading/error states
- **useCategories** - Fetches categories

### Component Hierarchy

```
App
└── BrowserRouter
    └── ShopProvider
        └── Layout
            ├── Header (search, user info)
            ├── Sidebar (categories)
            ├── ProductList (product grid)
            └── CartBar (cart summary)
```

## 📱 Responsive Design

The application is fully responsive with the following breakpoints:

| Breakpoint       | Screen Size | Grid Columns |
| ---------------- | ----------- | ------------ |
| **xs** (default) | < 475px     | 1 column     |
| **sm**           | ≥ 640px     | 2 columns    |
| **md**           | ≥ 768px     | 3 columns    |
| **lg**           | ≥ 1024px    | 3 columns    |
| **xl**           | ≥ 1280px    | 4 columns    |
| **2xl**          | ≥ 1536px    | 5 columns    |

### Responsive Features

- **Mobile**: Collapsible sidebar, single column product grid
- **Tablet**: 2-3 column product grid, static sidebar
- **Desktop**: Multi-column layout, optimized spacing

## 📜 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## ⚙️ Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

- Custom primary color palette
- Extended breakpoints (xs: 475px)
- Tailwind Animate plugin

### Vite

Configuration in `vite.config.js`:

- Path alias `@` for `src/` directory
- React plugin

### ESLint

Code quality rules in `.eslintrc.cjs`:

- React hooks rules
- React refresh rules
- Maximum warnings: 0

## 🎨 UI Components

The project uses **Shadcn UI** components:

- Button
- Card
- Input
- Badge
- Toaster (Sonner)
- Sidebar
- Separator
- Tooltip
- Dialog
- Sheet

## 🔧 Key Features Explained

### Cart Management

- Add products to cart
- Update quantities
- Remove items
- View total price
- Persistent storage (localStorage)

### Category Navigation

- Click category to filter products
- URL-based navigation
- Active state highlighting
- Responsive sidebar (mobile: slide-in, desktop: static)

### Search

- Real-time search filtering
- URL parameter persistence
- Searches product names

### Product Display

- Responsive grid layout
- Product images
- Price display
- Quantity controls
- Add to cart functionality

## 🚧 Future Enhancements

Potential improvements:

- [ ] Backend API integration
- [ ] User authentication
- [ ] Order history
- [ ] Payment integration
- [ ] Product reviews
- [ ] Favorites/Wishlist
- [ ] Multi-language support
- [ ] Dark mode

## 📝 License

This project is private and proprietary.

## 👨‍💻 Development

### Code Style

- Functional components with hooks
- Single Responsibility Principle
- Component-based architecture
- ESLint for code quality

### Best Practices

- Use Context API for global state
- Custom hooks for reusable logic
- Memoization for performance
- Responsive-first design
- Accessible components (ARIA labels)

---

**Built with ❤️ using React + Vite + Tailwind CSS**
