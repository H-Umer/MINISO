import React from 'react'
import { useParams } from 'react-router-dom'
import { detail2 } from '../productsdata/Carddata';

const Detail_page = () => {
  const {id} = useParams();
  const detail = detail2.find((x)=>x.id === id )
    return (
    <div className='container'>
    <div className='row my-4'>
    <div className='col-md-6'>
    <img src={detail.img} alt='' style={{height: 350 }} />
    </div>  
    <div className='col-md-6 text-center'>
    <h1>{detail.title}</h1>
    <p><span className='fw-bold'>Brand: </span>{detail.brand}</p>
    <p><span className='fw-bold'>Category: </span>{detail.category}</p>
    <p><span className='fw-bold'>Price: </span>{detail.price}</p>
    <p><span className='fw-bold'>Stock: </span>{detail.stock}</p>
    <p><span className='fw-bold'>Description: </span>{detail.description}</p>
    </div>  
    </div>  
    </div>
  )
}

export default Detail_page
