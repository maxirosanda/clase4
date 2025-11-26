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
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserProvider from './context/UserContext';

function App() {

  return (
    <UserProvider>
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
              <Route path="/login" element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </UserProvider>
  )
}

export default App
