
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FrontPage } from './pages/frontpage'
import { ContactPage } from './pages/ContactPage'
import { ProductPage } from './pages/ProductPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { LoginPage } from './pages/LoginPage'
import { Layout } from "./layout/Layout"


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<FrontPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/productDetails" element={<ProductDetailPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
