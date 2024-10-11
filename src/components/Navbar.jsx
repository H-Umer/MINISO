import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

function Navbar () {
  return (
    <div className='container'>
   <nav className="navbar">
  <div className="container-fluid ">
    <Link className="navbar-brand text-light fs-6"><i class="fa-solid fa-phone "></i> +92 311 111 1600</Link>
    <Link className="navbar-brand  fs-6 text-light text-center"><i class="fa-solid fa-truck "></i> Free Delivery on orders more than Rs5000</Link>
    <Link className="navbar-brand mx-4 text-light fs-6"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram mx-3"></i><i class="fa-brands fa-youtube"></i></Link>
    
  </div>
</nav>
<div className='container'>
<nav className="navbar nn">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex m-auto"><img src='/images/logo.avif' alt='' className='logo'/> </Link>
    <form className="d-flex" role="search">
     <ul className='d-flex fs-5 ul'>
     <li className='mx-2'><i class="fa-solid fa-magnifying-glass"></i></li>
     <li><i class="fa-solid fa-user"></i></li>
     <li className='mx-2'><i class="fa-regular fa-heart"></i></li>
     <li><i class="fa-solid fa-cart-shopping"></i></li>
     </ul>
    </form>
  </div>
</nav>
</div>
<div className='wow'>
<nav className="navbar fw-bold  vv navbar-expand-lg m-auto">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" href="#">Home 🏠</Link>
        <Link className="nav-link active" href="#">NEW ARRIVALS 👚</Link>
        <Link className="nav-link active" href="#">SNACKS AND BISCUITS 🍪</Link>
        <Link className="nav-link active" aria-disabled="true">LOTSO 🧸</Link>
        <Link className="nav-link active" aria-disabled="true">BARBIE💃</Link>
        <Link className="nav-link active" aria-disabled="true">WE BARE BEARS 🐼</Link>
        <li className="nav-item  active dropdown active">
  <Link className="nav-link dropdown-toggle  active " id="dropdownMenuButton" data-mdb-toggle="dropdown"
  aria-expanded="false" href="#" role="button" data-bs-toggle="dropdown"  data-hover="dropdown" >
    CATEGORIES
  </Link>
  <ul className="dropdown-menu active" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" href="#">Skin Care</Link></li>
    <li><Link className="dropdown-item" href="#">Garments</Link></li>
    <li><Link className="dropdown-item" href="#">Bags</Link></li>
    <li><Link className="dropdown-item" href="#"> Stationary</Link></li>
    <li><Link className="dropdown-item" href="#">Fragrances</Link></li>
  </ul>
</li>
        <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    LOYALTY ❤️
  </Link>
  <ul className="dropdown-menu active" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" href="#">Skin Care</Link></li>
    <li><Link className="dropdown-item" href="#">Garments</Link></li>
    <li><Link className="dropdown-item" href="#">Bags</Link></li>
    <li><Link className="dropdown-item" href="#"> Stationary</Link></li>
    <li><Link className="dropdown-item" href="#">Fragrances</Link></li>
  </ul>
</li>
<Link className="nav-link  active" >CONTACT US</Link>
      </div>
    </div>
  </div>
</nav>
</div>
 <div>
 <div style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}><p><marquee direction="right" scrollamount="10" >Spend Rs.5000 & get 10% off on every new order! </marquee></p></div>
 </div>
    </div>
  )
}

export default Navbar
