import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import MediaPage from "../pages/MediaPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/media" element={<MediaPage />} />
        </Routes>
    );
}

export default AppRoutes;
