import React,{useContext, useState} from 'react'
import { GlobalContext } from '../../Context/context'
import { CartContext } from '../CartContext/context'
import { decodeToken } from 'react-jwt'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AppRoute } from '../../App';
import Button from 'react-bootstrap/Button';


export default function UserCartInfo() {
  const [productQuantity, setproductQuantity] = useState(0)
  const [customerAddress,setCustomerAddress]= useState("")
  const [customerContact,setCustomerContact] =useState("")
  const [billingMehtod,setBillingMehtod] =useState([])
  const [account,setAccount] =useState("")
  const [trackingId, setTrackingId] = useState("")

  const { cart_state, cart_dispatch } = useContext(CartContext)
  const { state, dispatch } = useContext(GlobalContext)
  const user = decodeToken(state.token)
  console.log(user)
  const checkout = (e) => {
      const payload = {
          items: cart_state.cart,
          totalBill: total,
          customerAddress,
          customerContact, 
          billingMehtod,
          account,
          customerName: user.username,
          customerEmail: user.email
      }

      console.log(payload)
      axios.post(`${AppRoute}api/create-order`,payload)
      .then((json) =>{
        
        console.log(json.data)
        cart_dispatch({
          type:"CLEAR_CART",
          payload
        }) 
      }
    
       )
    
      .catch(err => console.log(err))
  
  
      Swal.fire({
        title: 'Order Placed Successfully!',
        text: 'Thanks for chooshing Metanoia',
        icon: 'success',
        confirmButtonText: 'Please Check Your Email'
      })
  
      

     
  }
  const checkoutDetails=(e) =>{
    e.preventDefault();
    const payload={
      items: cart_state.cart,
      totalBill: total,
      customerAddress,
      customerContact, 
      billingMehtod,
      account,
      customerName: user.username,
      customerEmail: user.email
    }
    console.log(payload)
  }

  // const IncreaseQuantity = (_id, newQuantity) => {
  //   const payload = {
  //     _id,
  //     productQuantity: newQuantity
  //   }
  //   cart_dispatch(
  //     {
  //       type: 'INCREASE_QUANTITY',
  //       payload
  //     }
  //   );
  // };

  // const DecreaseQuantity = (_id, newQuantity) => {
  //   const payload = {
  //     _id,
  //     productQuantity: newQuantity
  //   }
  //   cart_dispatch(
  //     {
  //       type: 'DECREASE_QUANTITY',
  //       payload
  //     }
  //   );
  // };

  const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.price * product.productQuantity), 0)

//   const TrackOrder=(e) =>{
//     axios.get(`${AppRoute}api/order-by-id/${_id}`)
//     .then((json) => { console.log(json.data.order._id)
//   }).catch(err => console.log(err))
// }





  return (

    <>
      <div style={{ color: "burlywood", backgroundColor: "black", textAlign: "center" }}><h2>MY CART</h2></div>
      
      <div className='container ' style={{background:'burlywood'}}>
        <br />
        {/* <Form onSubmit={TrackOrder}> */}
        <Form >

      <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
      <Form.Label className="mb-3"><b>Enter Your Tracking ID to check order details</b></Form.Label>
      <Form.Control className="mb-3" type="tracking id" placeholder="Enter tacking id"  /> 
        {/* <Form.Control className="mb-3" type="tracking id" placeholder="Enter tacking id"  onClick={() => setTrackingId(val._id)} />  */}
        <Button className='btn btn-dark mb-4' type="submit" style={{color:'burlywood'}}>
        Check
      </Button>
      </Form>
      </div>
<br /><br />
      <div className="container">

        <div className="container-fluid">
          <table className="table">
            <thead >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Image</th>
                <th scope="col">Quantity</th>
                {/* <th scope='col'>Quantity Control</th> */}
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>

              </tr>
            </thead>
            <tbody>
   {
    cart_state.cart.map((val,key)=>
    <tr key={key}>
    <th scope="row">{val._id}</th>
    <td >{val.productName}</td>
    <td><img style={{height:'5vh'}} className='img-fluid' src={val.thumbnail}/></td>

 
          <td >{val.productQuantity}</td>
      {/* <td>   
 <button className="btn btn-dark mx-3"disabled={val.productQuantity <= 1} onClick={() => DecreaseQuantity(val._id, val.productQuantity - 1)} >-</button>
  {val.productQuantity}
 <button className="btn btn-dark mx-3"onClick={() => IncreaseQuantity(val._id, val.productQuantity + 1)} >+</button>
  </td>  */}

     <td >{val.price} {val.priceUnit}</td>
     <td >{val.productQuantity*val.price} {val.priceUnit}</td>
   </tr>
  )
   }
  
  </tbody>
          </table>

        </div>
      </div>
      
      <div className="container bg-light  d-flex justify-content-around align-items-center"  >
                    <h6>Your Total Amount Would be</h6>
                    <p>:</p>
                    <div><b>{total} USD</b></div>
                </div>
              
                <br />


                <div className="container"style={{backgroundColor:'burlywood'}}>
      <div className="  flex justify-content-center align-items-center"   >
        <h4 className="mb-3" style={{ color: "burlywood",backgroundColor:'black',textAlign:'center' }}><span>ADD CHECKOUT DETAILS</span> </h4>
       

        <div className="col"style={{backgroundColor:'burlywood'}}>
          <div className='col m-auto 'style={{backgroundColor:'burlywood'}}>
            
      <Form onSubmit={checkoutDetails}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Costumer Address</Form.Label>
        <Form.Control  type="address" placeholder="house#123, stret#123 ,abc city"
        value={customerAddress} onChange={(e)=> setCustomerAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Costumer Contact Number</Form.Label>
        <Form.Control  type="contact" placeholder="03123456789" 
         value={customerContact} onChange={(e)=> setCustomerContact(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Add Account Number</Form.Label> 
      
      <Form.Select value={billingMehtod} onChange={(e)=> setBillingMehtod(e.target.value)} >
      <option id='1'  style={{color: 'burlywood'}}>Select Payment Method</option>
      <option id='2'>COD cash on delivery</option>
      <option id='3'>JazzCash / easyPaisa</option>
      <option id='4'>Bank Transfer</option>
    </Form.Select>
    </Form.Group>


    <Form.Group className="mb-3">
    <Form.Label>Add Account Number</Form.Label> 
    <InputGroup >
        <InputGroup.Radio  className="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios1"
      defaultValue="option1" />
        <Form.Control  aria-label="Text input with radio button" placeholder='Select option and enter your Bank ,JazzCash / easyPaisa Account Details'
       value={account} onChange={(e)=>setAccount(e.target.value)} />
      </InputGroup>
      </Form.Group>
    <Form.Group className="mb-3">
    
  
      </Form.Group>
      <div className='btn btn-dark mb-4' style={{color:"burlywood"}} onClick={checkout}>Checkout</div>
   
    </Form>
    </div>
    </div>
    </div>
    </div>
    </>

  )
}


