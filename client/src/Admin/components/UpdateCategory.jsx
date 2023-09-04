import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../Utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { AppRoute } from '../../App';
import { BsPencilSquare } from 'react-icons/bs'

function UpdateCategoryModal({ recallData, ID }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [CategoryName, setCategoryName] = useState("")
    const [CategoryImage, setCategoryImage] = useState(null)

    const UpdateCategoryNew = (e) => {
        e.preventDefault();


        console.log(CategoryImage.name)

        const storageRef = ref(storage, `images/category${CategoryImage.name}`);
        uploadBytes(storageRef, CategoryImage).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = {
                        _id: ID,
                        CategoryName,
                        CategoryImage: url
                    }
                    console.log(payload)
                    axios.put(`${AppRoute}api/update-category`, payload)
                        .then((json) => {
                            console.log(json.data)
                            setShow(false);

                            recallData(json.data.category)
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
                    <Modal.Title> Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={UpdateCategoryNew}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Category Name
                            </label>
                            <input
                                value={CategoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CategoryName"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
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

export default UpdateCategoryModal;
