import React from 'react'
import Sidebar from './components/Sidebar'
import Category from './pages/Category'
import Home from './pages/Home'
import Brands from './pages/Brands'
import Products from './pages/Products'
import { Route,Routes} from "react-router-dom";
import Orders from './pages/Orders'





export default function Admin() {
  return (
  // .row>.col-md-3+.col-md-9
  <div className="row m-0 p-0 ">
    <div className="col-md-3 m-0 p-0 bg-dark " style={{height:'100vh'}}>
      <Sidebar/>
    </div>
    
    <div className="col-md-9 "style={{height:'100vh',overflow:"scroll"}}>
      
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Home />} />
     
      </Routes>
    </div>
  </div>
  )
}
