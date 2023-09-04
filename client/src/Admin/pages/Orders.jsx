import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import {BsPencilSquare} from 'react-icons/bs'
import { AppRoute } from '../../App'

export default function Orders() {

  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios.get(`${AppRoute}api/all-orders`)
      .then((json) => setOrders(json.data.orders))
      .catch((error) => console.log(error))
  }, [])

  const CancelOrder = (id) => {
    const payload = {
      _id: id,
      Status: "Cancelled",
      Message: "Order Cancelled , Please Contact our Helpline"
    }

    console.log(payload)
    axios.put(`${AppRoute}api/update-order`, payload).then((json) => {
      setOrders(json.data.orders)
    }).catch(err => console.log(err))

  }

  const DeliverOrder = (id) => {
    const payload = {
      _id: id,
      Status: "Delivered",
      Message: "Order Delivered Successfully, Please Acknowledge"
    }

    console.log(payload)
    axios.put(`${AppRoute}api/update-order`, payload).then((json) => {
      setOrders(json.data.orders)
    }).catch(err => console.log(err))
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-irems-center bg-secondary p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Brands</span>
        </div>
        <div className="container">
          <table className="table table-sm">
            <thead>
              <tr>
                {/* <th scope="col">Tracking ID</th> */}
                <th scope="col">Customer Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Billing Method</th>
                <th scope="col">Status</th>
                {/* <th scope="col">Date</th> */}
                {/* <th scope="col">Message</th> */}
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((val, key) =>
                  <tr key={key}>
                    {/* <th scope="row">{val._id}</th> */}
                    <td >{val.customerName}</td>
                    <td >{val.customerAddress}</td>
                    <td >{val.customerEmail}</td>
                    <td >{val.billingMehtod}</td>
                    <td >{val.Status}</td>
                    {/* <td >{val.order_at}</td> */}
                    {/* <td>{val.Message}</td> */}


                    <td>
                      <div className='d-flex justify-content-between'>
                        <button className="btn btn-success btn-sm" onClick={() => DeliverOrder(val._id)}>Delivered</button>
                        <button className="btn btn-danger btn-sm" onClick={() => CancelOrder(val._id)}>Cancelled</button>
                      </div>
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




