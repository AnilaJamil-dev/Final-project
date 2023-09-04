import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ClockLoader } from 'react-spinners'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppRoute } from '../../App';



export default function Brands() {
    const [brands, setBrands] = useState([])
  const [showLoader, setshowLoader] = useState(true)
  
 
  useEffect(() => {
    AOS.init();
  }, [])

useEffect(()=>{
  axios.get(`${AppRoute}api/get-all-brands`)
  .then((json)=> {setBrands(json.data.brands); setshowLoader(false);})
  .catch((error) => console.log(error))
},[])

  
  return (
   <>
    {
        showLoader ?

          (
            <div className="container d-flex justify-content-center align-items-center" style={{ width: '100vw', height: '100vh' }}>
            <ClockLoader color="#e6c518" />
            </div>
          )
          :
    <div className="container ">
      <div   className="my-5 text-center ">
        <h1 style={{color:"#b89465"}}>BRANDS</h1>
        <p className='text-secodary'>DISCOVER HIGH END BRANDS OF WATCHES</p>
      </div>
      <div className="row" >
     
      {
 brands.map((val, key) =><div className="col-md-3 my-2" data-aos="zoom-out"  key={key}>  
       <Link to={`/products/brand/${val.BrandName}`} className='text-decoration-none'>
       <div className="card h-100" data-aos="fade-up">
             <img src={val.BrandImage} className="card-img-top p-5" alt={val.BrandName} style={{ height: '30vh', objectFit: 'contain' }} />
             <div className="card-body text-center"style={{background:"black"}}>
                 <h5 style={{color:"burlywood"}} className="card-title">{val.BrandName.toUpperCase().replace('-',' ')}</h5>
             </div>
         </div>
     </Link>
 </div>)
    }
      
      
  
   
      </div>
    </div>}
   </>
  )
}
