import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';

import Navbar from './components/Navbar/Navbar';
import Home from "./components/Pages/Home/Home";
import Shop from "./components/Pages/Shop/Shop";
import Detail from "./components/Pages/Detail/Detail";
import Contact from "./components/Pages/Contact/Contact";
import Cart from "./components/Pages/Cart/Cart";
// import { SearchBar } from "./components/Search/Search";

import './App.css';

const App = () => {
  const [cartsVisibility, setCartsVisible] = useState(false)
  const [productsInCart, setProductsInCart] = useState([])
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart
              visibilty={cartsVisibility}
              products={productsInCart} />} />
            {/* <Route path="/search" element={<SearchBar />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
