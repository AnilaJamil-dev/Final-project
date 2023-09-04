import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import Products from '../../Guest/Pages/Products'
// import NavigationBar from '../../User/Components/NavigationBar'
import Brands from '../../Guest/Pages/Brands'
import CategoriesSection from '../../Guest/Pages/CategoriesSection'

export default function Home() {


 

  return (
    <>
  {/* <NavigationBar/> */}
<HeaderSection />
<CategoriesSection/>
<br /><br />
<Brands/>
<br /><br />
<Products/>


  </>
  )
}
