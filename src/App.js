import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Stores from './components/Stores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/stores" element={<Stores/>} />
      </Routes>
    </Router>
  );
}

export default App;

