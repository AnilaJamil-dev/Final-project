import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ClockLoader } from 'react-spinners'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppRoute } from '../../App';


export default function Products() {
    const [Product, setProduct] = useState([])
    const { CategoryName } = useParams()
    const [showLoader, setshowLoader] = useState(true)

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        axios.get(`${AppRoute}api/get-product-by-category/${CategoryName}`)
            .then((json) => {
                setProduct(json.data.product);
                setshowLoader(false);
            })
            .catch((error) => console.log(error))
    }, [])


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
                    <div className="container ">
                        <div className="my-5 text-center ">
                            <h1 style={{ color: "#b89465" }}>FEATURED PRODUCTS - {CategoryName}</h1>
                            <p className='text-secodary'>DISCOVER OUR FEATURED PRODUCTS</p>
                        </div>
                        <div className="row">

                            {
                                Product.map((val, key) => <div className="col-md-3 my-2" data-aos="zoom-out" key={key}>
                                    <Link to={`/products/${val._id}`} className='text-decoration-none'>
                                        <div className="card" >

                                            <img src={val.thumbnail} className="card-img-top p-3 " alt={val.productName} style={{ height: '300px', width: ' 200px', objectFit: 'cover' }} />
                                            <div className="card-body text-center" style={{ background: "black" }}>
                                                <h5 style={{ color: "burlywood", whiteSpace: "nowrap", overflow: "hidden" }} className="card-title">{val.productName.toUpperCase().replace('-', ' ')}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>)
                            }
                        </div>
                    </div>}
        </>
    )
}
