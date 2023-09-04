import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../Utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { AppRoute } from '../../App';
import Swal from 'sweetalert2';
import { BsPencilSquare } from 'react-icons/bs'


function UpdateBrand({ recallData, ID }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [BrandName, setBrandName] = useState("")
    const [BrandImage, setBrandImage] = useState(null)

    const updatingBrand = (e) => {
        e.preventDefault();
        console.log(BrandImage.name)

        const storageRef = ref(storage, `images/brands/${BrandImage.name}`);

        uploadBytes(storageRef, BrandImage).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = {
                        _id: ID,
                        BrandName,
                        BrandImage: url
                    }

                    axios.put(`${AppRoute}api/update-brand`, payload)
                        .then((json) => {
                            recallData(json.data.brand)
                            console.log(json.data)
                            setShow(false);


                            Swal.fire({
                                title: "Brand Updated Successfully!",
                                text: "Brand is updated successfully.",
                                icon: "success",
                                confirmButtonText: "Continue"
                            });
                        })
                        .catch((err) => alert(err.message))

                })
                .catch((error) => console.log(error));
        });
    }
    return (
        <>
            <Button variant="dark" onClick={handleShow}>
            <BsPencilSquare style={{ color: "burlywood" }} />  
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title> Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={updatingBrand}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Brand Name
                            </label>
                            <input
                                value={BrandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="BrandName"
                                aria-describedby="BrandName"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="formFile" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateBrand;



