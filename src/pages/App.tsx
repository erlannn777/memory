import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AboutUs from "./about-us";
import Cart from "./cart";
import Catalog from "./catalog";
import Home from "./home";
import Order from "./order";
import Product from "./product";
import Footer from "../components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/order" element={<Product />} />
                <Route path="/product" element={<Order />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
