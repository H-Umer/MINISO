import React from 'react'
import { detail3 } from '../productsdata/Carddata2'

const Cards2 = () => {
  return (
    <div className='container'>
    <div className=' seven m-auto my-4'>
      <h1 className='text-center my-5   ' style={{color: 'black', fontWeight: 'bold', fontSize: '30px'}}>New Arrival Minions</h1>
    </div>
      <div className='row'>
       {detail3.map((x)=>{
        return(
          <div className='col-md-2 mx-3 cc'>
          <div className="card m-auto mx-3" style={{width: '14rem ', border:'none', height: 400}}>
    <div className="col">
      <div className="card  card1 h-100"  >
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
export default Cards2
