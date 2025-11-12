import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ThemeProvider from './context/ThemeContent';
import CartProvider from './context/CartContext';
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Products/>}/>
            <Route path="/product-detail/:productId" element={<ProductDetail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
