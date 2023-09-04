import React, { useEffect, useState } from 'react'

export default function ImageSection({ images }) {
  const [img, setImg] = useState(images[0] ? images[0] : null)




  const changeImage = (index) => {
    setImg(images[index])
  }

  return (
    <>
      <div className="container w-100">
        <img src={img} alt="" className="img-fluid mb-5 w-100" style={{ height:'70vh', objectFit:'contain'}} />
      </div>

      <div  className='d-flex align-items-center'>
        {
          images?.map((val, key) =>

            <div className={img == images[key] ? ('border border-dark  p-2') : (null)} onClick={() => changeImage(key)} key={key} style={{ height: '30vh', objectFit: 'contain' }} >
              <img className=' img-fluid' src={val} alt={`img-${key}`} />
            </div>

          )
        }

      </div>



      <div className='d-flex align-items-center gap-3 bg-light p-3 rounded mb-3'>

      </div>
    </>
  )
}

