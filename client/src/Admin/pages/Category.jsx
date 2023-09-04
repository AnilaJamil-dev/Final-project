import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AppRoute } from '../../App'
// import { BsPencilSquare } from 'react-icons/bs'
import UpdateCategory from '../components/UpdateCategory'



export default function Category() {

  const [category, setCategory] = useState([])


  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-categories`)
      .then((json) => setCategory(json.data.categories))
      .catch((error) => console.log(error))
  }, [])

  const deleteCategory = (_id) => {
    console.log(_id)
    const payload = { _id }


    let config = {
      method: 'delete',
      url: `${AppRoute}api/delete-category/${_id}`
    };


    axios(config).then(json => setCategory(json.data.category)).catch(err => console.log(err))

  }


  // const updateCategory = (_id, update) => {
  //   axios
  //     .put(`${AppRoute}api/update-category`, { _id, ...update })
  //     .then(() => {
  //       setCategory();
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-irems-center bg-secondary p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Categories</span>
          <CategoryModal recallData={setCategory} />
          {/* <button className='btn btn-dark'>Add Category</button> */}
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Category Image</th>
                <th scope="col">Delete Category</th>
                <th scope="col">Update Category</th>

              </tr>
            </thead>
            <tbody>
              {
                category.map((val, key) =>
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td >{val.CategoryName}</td>
                    <td><img style={{ height: '5vh' }} className='img-fluid' src={val.CategoryImage} /></td>
                    <td>
                      <button className='btn btn-dark ' style={{ color: "burlywood" }} onClick={() => deleteCategory(val._id)}><RiDeleteBin6Line /></button>
                    </td>
                    <td>
                      
                    <UpdateCategory ID={val._id} recallData={setCategory}/>
                    </td>
                  </tr>)
              }

            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}
