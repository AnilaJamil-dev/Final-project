import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { AppRoute } from '../../App';


export default function Signup() {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const SignupUser = (e) => {
    e.preventDefault();
    const payload = { email, password, username }

    axios.post(`${AppRoute}api/signup`, payload)
      .then(json => {
        console.log(json.data)
        Swal.fire({
          title: 'Account Created Successfully!',
          text: 'Welcome to Metanoia',
          icon: 'success',
          confirmButtonText: 'Login to continue'
        })

        navigate("/signin");
      })

      .catch(err => console.log(err))

  }



  return (

    // <>Hello</>
    <>

      <div className=" mt-5  mb-3 flex justify-content-center align-items-center"   >
        <h3 className="text-center mt-5 mb-3" style={{ color: "burlywood" }}> ACCOUNT</h3>
        <br /><br />
       
        <div className="col">
          <div className='col-md-6 m-auto h-100 py-10'>
            <Form onSubmit={SignupUser}>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label><h6>Enter Username</h6></Form.Label>
                <Form.Control type="username" name="username" placeholder="Enter " value={username} onChange={(e) => setUsername(e.target.value)} />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h6>Email address</h6></Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><h6>Password</h6></Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Form.Text id="passwordHelpBlock" muted>

                  Your password must be 8-20 characters long, contain letters and numbers,
                  and must not contain spaces, special characters, or emoji.
                </Form.Text>


              </Form.Group>
              <Button style={{ color: "burlywood" }} variant="dark w-100" type="submit">
                Sign Up
              </Button>
            </Form>
            <div className="text-center ">
              <br></br>Or continue with Social Accounts
            </div>
            <div className="text-center pt-2">
              <Button style={{ color: "burlywood" }} variant="dark w-100" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" color='white' width="19" height="19" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>   Sign Up with facebook
              </Button>
              <div className="text-center pt-3">Already have an Account?
                <Link className='text-decoration-none' to={"/signin"}> Log In Now </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />
     
    </>
  )
}
