import React from 'react'
import '../App.css'

const Heading2 = () => {
  return (
    <div className='container'>
    <h1 className='text-center my-5   ' style={{color: 'black', fontWeight: 'bold', fontSize: '40px'}}> Our Favorites</h1>
    <p className='text-center fs-5'>Shop from our best selling collections</p>
    <div className='d-flex '>
      <div className='my-3'>
      <img src="/images/m1.webp" className='jj mx-5' alt=''></img>
      <img src="/images/m2.webp" className='jj mx-5' alt=''></img>
      </div>
      </div>
    </div>
  )
}

export default Heading2
