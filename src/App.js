import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product_list";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/notFound/NotFound";
import "./root.css";
export default function App() {
        return (
                <div>
                        <BrowserRouter>
                                <Routes>
                                        <Route index element={<Home />} />
                                        <Route path="/products" element={<Product />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="*" element={<NotFound />} />
                                </Routes>
                        </BrowserRouter>
                </div>
        );
}
