import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/context';
import Cookies from 'js-cookie';

// import UserProfile from './UserProfile';
// import Badge from 'react-bootstrap/Badge';
// import { MyCartContext } from '../Context/Cart/CartContext';

function NavigationBar() {

  const { state, dispatch } = useContext(GlobalContext)


  // useEffect(()=>{
  // console.log("CONTEXT DATA", state)
  // },[state])

  return (
    <Navbar expand="lg" data-bs-theme="light" className="bg-body-tertiary" >
      <Container >
        <Link className='nav-link text-dark' to="/"><h3 style={{ color: "burlywood" }}>METANOIA</h3></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">


            <Link className='nav-link text-dark' to="/">Home</Link>
            <Link className='nav-link text-dark' to="/categoriessection">Categories</Link>
            <Link className='nav-link text-dark' to="/products">Products</Link>
            <button className='ms-4 btn btn-dark' style={{ color: "burlywood" }} onClick={() => {
              Cookies.remove('token')
              localStorage.setItem('cart', JSON.stringify([]))
              dispatch({
                type: "USER_LOGOUT",
              })
            }}><b>LOGOUT</b></button>
            <Link className=' nav-link ms-auto ' to="/userprofile"><BiUser size={25} color={"burlywood"} />
            </Link>
            <Link className=' nav-link ms-auto ' to="/usercartinfo"><AiOutlineShoppingCart size={25} color={"burlywood"} />
            </Link>
          </Nav>

          {/* <UserProfile/> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;