import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import ToyPage from "../pages/ToysPage";
import ToyDetailsPage from "../pages/ToyDetailsPage";
import OrdersPage from "../pages/OrdersPage";
import NewOrderPage from "../pages/NewOrderPage";
import ElvesPage from "../pages/ElvesPage";
import ElfProfilePage from "../pages/ElfProfilePage";
import NotFoundPage from "../pages/NotFoundPage";


export default function AppRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="toys" element={<ToyPage />} />
                <Route path="toys/:toyId" element={<ToyDetailsPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="orders/new" element={<NewOrderPage />} />
                <Route path="elves" element={<ElvesPage />} />
                <Route path="elves/:elfId/*" element={<ElfProfilePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}