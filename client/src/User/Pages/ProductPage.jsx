// import React from 'react'

// export default function ProductPage() {
//   return (
//     <div>ProductPage</div>
//   )
// }

import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../../User/Components/ImageSection'
import ShopCart from '../Components/ShopCart'
import { ClockLoader } from 'react-spinners'
import { CartContext } from '../CartContext/context'
import { AppRoute } from '../../App'

export default function ProductPage() {

  const { _id } = useParams()
  const [product, setproduct] = useState({})
  // const [review, setReview] = useState("")
  // const [ratingstar, setratingStar] = useState(0)
  const [productQuantity, setproductQuantity] = useState(1)
  const [showLoader, setshowLoader] = useState(true)

  const { cart_state, cart_dispatch } = useContext(CartContext)

  const checkCart = cart_state.cart.some((val) => val._id == _id)

  useEffect(() => {
    console.log(cart_state)

    axios.get(`${AppRoute}api/get-product-by-id/${_id}`)

      .then((json) => {

        console.log(json.data);
        setproduct(json.data.product)
        setshowLoader(false);
      }).catch(err => console.log(err))
  }, [])

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity,
      // totalPrice: product.price * productQuantity    
    }
    console.log(payload)


    cart_dispatch(
      {
        type: 'ADD_TO_CART',
        payload
      }
    )

    Swal.fire({
      title: 'Added to Cart!',
      text: 'Check your Cart for Check Out',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    })
  }



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

          (
            <div className="container" >
              <div className="text-center my-5">
                <h1>{product.productName} - {product.price} {product.priceUnit}</h1>
                <p className="text-secondary">{product.description}</p>


                {
                  checkCart ? (<div style={{ backgroundColor: 'burlywood' }} className='py-3 text-white border-rounded fw-bold'>Already in Cart</div>) : (<>

                    <div className="my-3">
                      <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
                      {productQuantity}
                      <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
                    </div>

                    <div className="d-flex justify-content-center" onClick={addToCart}>
                      <ShopCart />
                    </div>
                  </>)
                }


              </div>
              <div className="row">
                <div className="col-md-12">

                  {
                    product?.images?.length > 0 && <ImageSection images={product.images} />
                  }

                </div>
              </div>
            </div>
          )

      }






    </>
  )
}

