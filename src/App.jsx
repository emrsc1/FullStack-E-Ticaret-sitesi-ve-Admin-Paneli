import './App.css'

import HomePage from './pages/HomePage'
// import ProductDetailsPage from './pages/ProductDetailsPage'
// import CartPage from './pages/CartPage'
import ShopPage from './pages/ShopPage'
import {Routes,Route} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import AuthPage from './pages/AuthPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
function App() {

  return (
   
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/shop" element={<ShopPage/>}/>
    <Route path="/blog" element={<BlogPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/cart"  element={<CartPage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="/product/:id" element={<ProductDetailsPage/>}/>
  </Routes>
    
  )
}

export default App
