import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductsDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/productdetails/:id' element={<ProductsDetails/>} />
      <Route path='/cart' element={<Cart />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
