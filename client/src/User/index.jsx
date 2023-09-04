import React from 'react'
import { Route, Routes,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Products from '../Guest/Pages/Products'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import UserCartInfo from './Pages/UserCartInfo'
import CategoriesSection from '../Guest/Pages/CategoriesSection'
import ProductPage from './Pages/ProductPage'
import ProductByCategory from '../User/Pages/ProductByCategory'
import ProductByBrand from '../User/Pages/ProductByBrand'
import UserProfile from './Pages/UserProfile'

export default function User() {
  return (
    <>
   <NavigationBar/>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categoriessection" element={<CategoriesSection />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:_id" element={<ProductPage />} />
    <Route path="/products/category/:CategoryName" element={<ProductByCategory />} />
    <Route path="/products/brand/:BrandName" element={<ProductByBrand />} />
    <Route path="/usercartinfo" element={<UserCartInfo/>}/>
    <Route path="/userprofile" element={<UserProfile/>}/>
  <Route path="*" element={<Navigate to="/" replace={true} />} />

    {/* <Route path="*" element={<Page404/>} /></Routes> */}
    </Routes>
<br /><br /><br />
<Footer/>
    </>
    
  )
}
