# 🎅 Santa's Workshop Dashboard

Live_Demo: https://santas-workshop-dashboard.netlify.app/

A modern, interactive dashboard application for managing Santa's Workshop operations. Built with React and featuring a festive Christmas theme, this application helps manage toys inventory, track orders, and monitor elf activities.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![React Query](https://img.shields.io/badge/React%20Query-5.90.12-orange)

## ✨ Features

### 🏠 Home Dashboard
- **Status Overview**: Real-time statistics showing:
  - Total toys in inventory
  - Pending orders count
  - Active elves count
- **Notice Board**: Display important workshop announcements and reminders
- **Christmas Countdown**: Live countdown timer showing days until Christmas

### 🧸 Toys Management
- **Toy Catalog**: Browse all available toys with beautiful card-based layout
- **Filtering**: Filter toys by:
  - Category (Toys, Plush, Electronics, Games, Crafts)
  - Stock availability (in-stock only)
- **Sorting**: Sort toys by:
  - Name (A-Z, Z-A)
  - Difficulty level (Easy, Medium, Hard)
- **Pagination**: Navigate through toys with paginated results (8 items per page)
- **Toy Details**: View detailed information for each toy
- **Stock Management**: Toggle stock availability for toys

### 📦 Orders Management
- **Order List**: View all orders in a table format
- **Status Filtering**: Filter orders by status tabs:
  - All
  - Pending
  - Packed
  - Shipped
- **Create Orders**: Add new orders with:
  - Child name
  - Country
  - Toy selection
  - Priority level (Low, Normal, High)
- **Form Validation**: Real-time validation for order creation

### 🧝 Elves Management
- **Elf Directory**: View all workshop elves
- **Elf Profiles**: Detailed profiles showing:
  - Name and role
  - Department
  - Experience level
  - Energy level (visual progress bar)
  - Active status
  - Assigned tasks
- **Energy Tracking**: Visual energy bars for each elf

### 🎨 UI/UX Features
- **Dark/Light Theme**: Toggle between light and dark themes with persistent preference
- **Responsive Design**: Fully responsive layout optimized for:
  - Desktop
  - Tablet
  - Mobile devices
- **Animated Snowflakes**: Festive snowflake animation throughout the app
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error fallbacks with user-friendly messages
- **Sound Effects**: Button click sound effects for better interactivity

## 🛠️ Tech Stack

- **React 19.1.0** - UI library
- **React Router DOM 7.11.0** - Client-side routing
- **TanStack React Query 5.90.12** - Data fetching and state management
- **Vite 6.3.5** - Build tool and dev server
- **ESLint** - Code linting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Santa-s_Workshop_Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── api/                 # API layer
│   ├── http.js         # HTTP client with mock data
│   ├── toys.api.js    # Toys API endpoints
│   ├── orders.api.js   # Orders API endpoints
│   └── elves.api.js    # Elves API endpoints
├── components/         # React components
│   ├── common/         # Shared components
│   │   ├── Countdown.jsx
│   │   ├── ErrorFallback.jsx
│   │   ├── Loader.jsx
│   │   ├── Pagination.jsx
│   │   ├── Skeleton.jsx
│   │   └── Snow.jsx
│   ├── elves/          # Elf-related components
│   ├── home/           # Home page components
│   ├── layout/         # Layout components
│   ├── orders/         # Order-related components
│   └── toys/           # Toy-related components
├── hooks/               # Custom React hooks
│   ├── useLocalStorage.js
│   └── useThemeMode.js
├── pages/               # Page components
│   ├── HomePage.jsx
│   ├── ToysPage.jsx
│   ├── ToyDetailsPage.jsx
│   ├── OrdersPage.jsx
│   ├── NewOrderPage.jsx
│   ├── ElvesPage.jsx
│   ├── ElfProfilePage.jsx
│   └── NotFoundPage.jsx
├── routes/              # Route configuration
│   └── AppRoutes.jsx
├── styles/              # CSS files
│   ├── globals.css     # Main stylesheet (imports all)
│   ├── base.css        # Base styles and animations
│   ├── layout.css      # Layout components
│   ├── components.css  # Reusable components
│   ├── pages.css       # Page-specific styles
│   ├── theme.css       # Dark theme styles
│   └── responsive.css  # Media queries
├── utils/               # Utility functions
│   └── sounds.js       # Sound effects
├── App.jsx              # Main app component
├── main.jsx             # Application entry point
└── queryClient.js       # React Query configuration
```

## 🎯 Key Features Breakdown

### Data Management
- Uses **React Query** for efficient data fetching, caching, and synchronization
- Mock API layer for development (easily replaceable with real backend)
- Optimistic updates and error handling

### Routing
- Nested routes with React Router
- Dynamic routes for toy and elf details
- 404 page for unmatched routes

### State Management
- React Query for server state
- Local state with React hooks
- LocalStorage for theme persistence

### Styling
- Modular CSS architecture
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Dark mode support

## 🎨 Theme Customization

The application supports both light and dark themes. The theme preference is saved in localStorage and persists across sessions. Toggle the theme using the button in the header.

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 900px - 1200px
- **Mobile**: < 900px
- **Small Mobile**: < 520px

## 🔧 Configuration

### API Configuration
The application uses a mock API layer located in `src/api/http.js`. To connect to a real backend:

1. Update the `BASE_URL` constant in `src/api/http.js`
2. Modify the `request` function to use actual fetch calls
3. Ensure your API endpoints match the expected format

### React Query Configuration
Query client settings can be modified in `src/queryClient.js`:
- Retry attempts
- Refetch on window focus
- Cache time
- Stale time

## 🎄 Special Features

- **Christmas Countdown**: Real-time countdown to December 25th
- **Animated Snowflakes**: Festive snow animation effect
- **Sound Effects**: Interactive button click sounds
- **Notice Board**: Workshop announcements and reminders

## 📝 Notes

- This application uses mock data for demonstration purposes
- All data is stored in memory and resets on page refresh
- The application is optimized for modern browsers

## 👨‍💻 Development

Created by **Svetlin Garabedyan**

Built with ❤️ for Santa's Workshop

---

**Merry Christmas! 🎄🎅**
