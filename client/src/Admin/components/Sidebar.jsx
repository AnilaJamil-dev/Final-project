import React, { useEffect,useContext } from 'react'
import {FaHome} from 'react-icons/fa'
import {BiCategoryAlt} from 'react-icons/bi'
import {TbBrandShopee} from 'react-icons/tb'
import {BsWatch,BsFillCartFill} from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie'

export default function Sidebar() {

    const { state, dispatch } = useContext(GlobalContext)

    const location= useLocation()

const NavItems = [
    {
        tab:"Home",
        url: "/",
        icon:<FaHome/>
    },
    {
        tab:"Categories",
        url: "/category",
        icon:<BiCategoryAlt/>
    },
    {
        tab:"Brands",
        url: "/brands",
        icon:<TbBrandShopee/>
    },
    {
        tab:"Products",
        url: "/products",
        icon:<BsWatch/>
    },  
    {
      tab:"Orders",
      url: "/orders",
      icon:<BsFillCartFill/>
  }
]

//useEffect applied for checking purpose only
// useEffect(()=>{
//     console.log(location.pathname)
// },[location])



  return (
 <>
 <div className="bg-light p-3 d-flex  text-white justify-content-between align-items-center">
<span style={{color:"burlywood"}}><h4>Admin</h4></span>
<button className='ms-4 btn btn-dark' style={{ color: "burlywood" }} onClick={() => {
              Cookies.remove('token')
              dispatch({
                type: "USER_LOGOUT",
              })
            }}><b>LOGOUT</b></button>
 </div>

 <ul className="nav flex-column pt-3  ">
 {
 NavItems.map((val,key)=> <li  key={key} className={`nav-item  m-2 ${location.pathname == val.url ?'bg-white rounded':null}`}>
    <Link className='nav-link d-flex align-items-center gap-2 ' style={{color:"burlywood"}}to={val.url}>
        <span>{val.icon}</span>
        <span>{val.tab}</span>
    </Link>
  </li>)
  }

</ul>

 </>
  )
}
