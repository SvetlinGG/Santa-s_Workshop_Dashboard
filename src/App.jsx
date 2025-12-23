import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="toys" element={<div className="page">Toys Page</div>} />
        <Route path="orders" element={<div className="page">Orders Page</div>} />
        <Route path="elves" element={<div className="page">Elves Page</div>} />
      </Route>
    </Routes>
  )
}

export default App
