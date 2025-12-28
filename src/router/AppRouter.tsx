import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Catalog } from "../pages/Catalog";
import { Delivery } from "../pages/Delivery";
import { Home } from "../pages/Home";
import { ItemsDetail } from "../pages/ItemsDetail";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/company/" element = {<About />}/>
            <Route path = "/catalog/" element = {<Catalog />}/>
            <Route path = "/delivery/" element = {<Delivery />}/>
            <Route path = "/items/:id" element = {<ItemsDetail />}/>
        </Routes>
    );
}