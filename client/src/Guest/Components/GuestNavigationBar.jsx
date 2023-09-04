import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'



function GuestNavigationBar() {



  return (
    <Navbar expand="lg"  data-bs-theme="light" className="bg-body-tertiary" >
      <Container >
        <Link className='nav-link text-dark' to="/"><h3 style={{color:"burlywood"}}>METANOIA</h3></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         

            <Link className='nav-link text-dark' to="/">Home</Link>
            <Link className='nav-link text-dark' to="/categoriessection">Categories</Link>
            <Link className='nav-link text-dark' to="/products">Products</Link>
            <Link className='nav-link text-dark' to="/brands">Brands</Link>

          
            <Link className='nav-link 'to="/signin">Sign in</Link>
            <Link className='ms-4 btn btn-dark'style={{color:"burlywood" }} to="/signup"><b>CREATE ACCOUNT</b></Link>
            {/* <Link className=' nav-link ms-auto ' to="/signin"><AiOutlineShoppingCart size={25} color={"burlywood"}/> */}
            {/* <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'>
             0
            </span> */}
            {/* </Link> */}

          </Nav>
       
{/* <UserProfile/> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GuestNavigationBar;