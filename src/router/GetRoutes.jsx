import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Page";
import Contact from "../pages/contact/Page";
import Services from "../pages/services/Page";
import Media from "../pages/media/Page";

function GetRoutes() {
    return (
        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/media' element={<Media />} />
        </Routes>
    )
}

export default GetRoutes