import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Footer from '../User/Components/Footer'
import CategoriesSection from './Pages/CategoriesSection'
import Products from './Pages/Products'
import Home from '../User/Pages/Home'
import GuestNavigationBar from './Components/GuestNavigationBar'
import Brands from './Pages/Brands'

export default function index() {
  return (
   <>
  <GuestNavigationBar/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/categoriessection" element={<CategoriesSection />} />
    <Route path="/products" element={<Products />} />
    <Route path="/brands" element={<Brands />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="*" element={<Navigate to="/signin" replace={true} />} />
  </Routes>

  <br />
<br />
<br />
<Footer/>
   </>
  )
}
