import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import Cookies from 'js-cookie'
import {GlobalContext} from '../../Context/context'
import { AppRoute } from '../../App';


export default function Guest() {
  
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  const {state,dispatch} =useContext(GlobalContext)

  const userLogin=(e)=>{
    e.preventDefault();

    const payload={email,password}
    // console.log(payload)
    
    axios.post(`${AppRoute}api/login`,payload)
    .then((json) =>{
      console.log(json.data.token)
     
      Cookies.set('token',json.data.token)

      dispatch({
        type:"USER_LOGIN",
        token: json.data.token
      }) 
    }
     )
  
    .catch(err => console.log(err))


    Swal.fire({
      title: 'Successfully Logged In!',
      text: 'Welcome back to Metanoia',
      icon: 'success',
      confirmButtonText: 'Lets start Shopping'
    })

   }

   return (
    <>

  <div className=" mt-5  mb-3 flex justify-content-center align-items-center"   > 
 <h3 className="text-center mt-5 mb-3" style={{color:"burlywood"}}>LOGIN</h3>
      <br /><br />
    {/* <img className=" mt-2 mb-1" style={{width:"80vh", height:"80vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBnuXzf4kh5DSwwOjtHQAv3RFykqKYHzkWeDGPb3ZsOsyw9Ed5v6a36Y-JanvJytVpNs&usqp=CAU" alt="logo"  /> */}
          <div className="col ">
    <div className='col-md-5 m-auto h-100 py-10'>
      <Form onSubmit={userLogin}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label><h6>Email address</h6></Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
     
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><h6>Password</h6></Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <Button style={{color:"burlywood"}}   variant="dark w-100" type="submit">
        Sign In
      </Button>
    </Form>
    <div className="text-center ">
      {/* Not a member? <Link className='text-decoration-none' to={"/signup"}>Sign Up</Link> */}
      <br></br>Or continue with Social Accounts
    </div>
    <div className="text-center pt-2">
    <Button  style={{color:"burlywood"}}   variant="dark w-100" type="submit">
    <svg xmlns="http://www.w3.org/2000/svg"color='white' width="19" height="19" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>   LogIn with facebook
      </Button>
      <div className="text-center pt-3">
      <Link className='text-decoration-none' to={"/signup"}>Sign Up </Link>|Forget Password
    </div>
     
    </div>
    </div>
    </div>
    </div>
    <br /><br /><br />
   
    </>
  )
}

