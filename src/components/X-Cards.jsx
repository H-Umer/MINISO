import React from 'react'
import { xdetail } from '../productsdata/XCarddata'

const XCards = () => {
  return (
    <div className='container'>
      <div className='row'>
      {xdetail.map((x)=>{
        return(
      <div className="card mb-3 my-5  " style={{maxWidth: 440,  border:'none'}}>
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src={x.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title  fs-6">{x.title}</h5>
        <span className="card-span">{x.price}</span>
      </div>
    </div>
  </div>
</div>

        )
      })}
      </div>
    </div>
  )
}

export default XCards
