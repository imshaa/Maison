import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import Home from './components/home';
import Cart from './components/cart';
import Auth from './components/auth';

import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Navbar />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/auth' element={<Auth />} />

    </Routes>

    </>
  );
}

export default App;
