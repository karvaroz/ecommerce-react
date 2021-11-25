import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import CartState from "./context/CartState";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Slider />
        <CartState>
          <Routes>
            <Route path="/" element={< ItemListContainer />} />
            <Route path="/product/:id" element={< ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={< ItemListContainer />} />
          </Routes>
        </CartState>
      </Router>
    </>
  )
}

