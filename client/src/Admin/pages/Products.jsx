import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from 'axios'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { AppRoute } from '../../App'
import UpdateProduct from '../components/UpdateProduct'

export default function Products() {

const [Product, setProduct] = useState([])

useEffect(()=>{
  axios.get(`${AppRoute}api/get-all-products`)
  .then((json)=> setProduct(json.data.products))
  .catch((error) => console.log(error))
},[])


  const deleteproduct = (_id) => {
        console.log(_id)
        const payload = { _id }


        let config = {
            method: 'delete',
            url: `${AppRoute}api/delete-product/${_id}`
        };

        axios(config).then(json => setProduct(json.data.product)).catch(err => console.log(err))

    }


  return (
    <>
    <div className="container">
        <div className="d-flex justify-content-between align-irems-center bg-secondary p-2 my-3 rounded">
            <span className='fs-4 fw-bold text-white'>Products</span>
            <ProductModal />
            {/* <button className='btn btn-dark'>Add Products</button> */}
        </div>
        <div className="container">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Brand</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Delete Category</th>
      <th scope="col">Update Category</th>

    

    </tr>
  </thead>
  <tbody>
  {
    Product.map((val,key)=>
    <tr key={key}>
    <td><img style={{height:'5vh'}} className='img-fluid' src={val.thumbnail}/></td>
    <td >{val.productName}</td>
    <td >{val.category}</td>
    <td >{val.brand}</td>
    <td>{val.price}</td>
    <td>{val.description.length < 20 ? val.description : val.description.substring(0, 20) + "..."}</td>
      <td>
    <button className='btn btn-dark mx-1'onClick={() => deleteproduct(val._id)}><RiDeleteBin6Line style={{color:'burlywood'}}/></button>
    </td>
    <td>
      <UpdateProduct ID={val._id} recalldata={setProduct}/>
    </td>
  </tr> )
   }


  
  </tbody>
</table>

        </div>
    </div>
    </>
  )
}



