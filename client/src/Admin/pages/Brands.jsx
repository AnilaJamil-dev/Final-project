import React, { useEffect, useState } from 'react'
 import axios from 'axios'
import BrandModal from '../components/BrandModal'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { AppRoute } from '../../App'
import UpdateBrand from '../components/UpdateBrand'

export default function Brands(){
const [brands, setBrands] = useState([])

  useEffect(()=>{
   axios.get(`${AppRoute}api/get-all-brands`)
  .then((json)=>setBrands(json.data.brands))
  .catch((error)=> console.log(error))
},[])

const deleteBrand = (_id) => {
  console.log(_id)
  const payload = { _id }


  let config = {
      method: 'delete',
      url: `${AppRoute}api/delete-brand/${_id}`
  };


  axios(config).then(json =>setBrands(json.data.brand)).catch(err => console.log(err))

}

  return (
    <>
    <div className="container">
        <div className="d-flex justify-content-between align-irems-center bg-secondary p-2 my-3 rounded">
            <span className='fs-4 fw-bold text-white'>Brands</span>
            <BrandModal recallData={setBrands }/>
        </div>
        <div className="container">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Brand Image</th>
      <th scope="col">Delete Brand</th>
      <th scope="col">Update Brand</th>

    </tr>
  </thead>
  <tbody>
   {
    brands.map((val,key)=>
    <tr key={key}>
    <th scope="row">{key +1}</th>
    <td >{val.BrandName}</td>
    <td><img style={{height:'5vh'}} className='img-fluid' src={val.BrandImage}/></td>
  <td>
  <button className='btn btn-dark mx-4'style={{color:'burlywood'}} onClick={() => deleteBrand(val._id)}><RiDeleteBin6Line/></button>
     </td>
     <td>
      <UpdateBrand ID={val._id} recallData={setBrands }/>
     </td>
   </tr>
  )
   }
  
  </tbody>
</table>

        </div>
    </div>
    </>
  )
  }


