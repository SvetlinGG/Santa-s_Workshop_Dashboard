import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import ToysPage from "./pages/ToysPage"
import OrdersPage from "./pages/OrdersPage"
import NewOrderPage from "./pages/NewOrderPage"
import ElvesPage from "./pages/ElvesPage"
import ElfProfilePage from "./pages/ElfProfilePage"
import ToyDetailsPage from "./pages/ToyDetailsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="toys" element={<ToysPage />} />
        <Route path="toys/:toyId" element={<ToyDetailsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orders/new" element={<NewOrderPage />} />
        <Route path="elves" element={<ElvesPage />} />
        <Route path="elves/:elfId/*" element={<ElfProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
