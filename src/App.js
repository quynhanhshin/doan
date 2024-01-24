import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Product_list";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/notFound/NotFound";
import "./root.css";
import Product_detail from "./pages/product_detail/Product_detail";
import Blog from "./pages/blog/Blog"
import Post_detail from "./pages/post_detail/Post_detail"
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<Product_detail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<Post_detail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
