import React from 'react'
import { detail2 } from '../productsdata/Carddata'
import '../App.css'

const Cards1 = () => {
  return (
    <div className='container '>
      <div className='row'>
       {detail2.map((x)=>{
        return(
        <div className='col-md-2 mx-3 cc'>
        <div className="card m-auto mx-3" style={{width: '14rem ', border:'none', height: 400}}>
  <div className="col">
    <div className="card  card1 h-100"  >
      <img src={x.img} className="card-img-to p img" alt="..." />
      <div className="card-body text-center my-3">
        <h5 className="card-title fs-6">{x.title}</h5>
        <span className="card-span">{x.price}</span>
      </div>
    </div>
  </div>
 


        </div>
        </div>)
       })}
      </div>
    </div>
  )
}

export default Cards1
