import React, { useContext } from 'react'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { GlobalContext } from '../../Context/context';
import {decodeToken} from 'react-jwt'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import UserCartInfo from './UserCartInfo';

export default function UserProfile() {
    const { state, dispatch } = useContext(GlobalContext)
    const user =decodeToken(state.token)

    return (
        <>
            <div style={{ color: "burlywood", backgroundColor: "black", textAlign: "center" }}><h3>MT PROFILE</h3></div>
            <br /><br /> <br />

            <Card style={{ width: '18rem', margin: "auto", flex: "center", backgroundColor: "burlywood" }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" roundedCircle />
      <Card.Body>
        <Card.Title style={{color:"black"}}><h1>{user.username}</h1></Card.Title>
        <Card.Title style={{color:"black"}}><h5>{user.email}</h5></Card.Title>
                
                    <Card.Text style={{ color: "black" }}>
                        You are currently logged In to Metanoia the Hub of Luxury Brands Watches.
                    </Card.Text>
   <Link to="/usercartinfo"><button className='btn btn-dark'>See Cart<AiOutlineShoppingCart size={25} color={"burlywood"} /></button></Link>
                </Card.Body>
            </Card>
        </>
    )
}
