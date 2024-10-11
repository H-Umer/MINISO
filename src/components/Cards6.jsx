import React from 'react'
import { detail6 } from '../productsdata/Carddata6'

const Cards6 = () => {
  return (
    <div className='container '>
    <div className=' seven m-auto container'>
    <img src='/images/main.webp' alt='' className='my-4' style={{width: '100%'}}/>
  </div>
      <div className='row'>
       {detail6.map((x)=>{
        return(
          <div className='col-md-2 mx-3 cc'>
          <div className="card m-auto mx-3 my-5" style={{width: '14rem ', border:'none', height: 400}}>
    <div className="col">
      <div className="card my-4 card1 h-100"  >
        <img src={x.img} className="card-img-top img" alt="..." />
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

export default Cards6
