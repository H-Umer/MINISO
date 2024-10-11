import React from 'react'
import detail from '../productsdata/Apidata'
import "../App.css" ;


const Cards = () => {
  return (
    <div className='container'>
   <div className='row'>
   {detail.map((x)=>{
    return(
    <div className='col-md-2 '>
    <div className="card m-auto  my-3" style={{width: '14rem ', border:'none'}}>
    <div className="hover11 column">
  
  <div>
    <figure><img src={x.images} className="card-img-top" alt="..." /></figure>
  </div>
</div>
</div>

    </div>)
   })}
  
   </div>
    </div>
  )
}

export default Cards
