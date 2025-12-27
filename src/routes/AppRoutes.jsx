import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import ToyPage from "../pages/ToysPage"


export default function AppRoutes(){

    return (
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/toys" element={<ToyPage />} />
            <Route path="/toys/:toyId" element={<ToyDetailsPage />} />
            </Route>
        </Routes>
    )
}