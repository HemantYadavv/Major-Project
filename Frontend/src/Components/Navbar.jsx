import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     

    <div className="container-fluid p-0">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between shadow  border-bottom ">
    <div className="col-md-3 mb-2 mb-md-0 px-4">
      <Link to={"/"}>
          <img src="https://i.pinimg.com/originals/d6/0f/25/d60f25a4791d63bae523142d92896b20.png" alt="" style={{height:100, width:200}} />
          </Link>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to="/" className="nav-link px-2 fs-5 fw-semibold text-dark ">
          Home
        </Link>
      </li>
   
     
      <li>
        <Link to ="/contact" className="nav-link px-2 fs-5 fw-semibold text-dark">
          Contact
        </Link>
      </li>
      <li>
        <Link to ="/product" className="nav-link px-2 fs-5 fw-semibold text-dark">
          Product
        </Link>
      </li>
      <li>
        <Link href="#" to={"/About"} className="nav-link px-2 fs-5 fw-semibold text-dark">
          About
        </Link>
      </li>
    </ul>
    <div className="col-md-3 text-end">
    <Link to="/Cart" className=" me-5">
        <span><i class="fa-solid fa-cart-shopping fa-lg"></i></span>
      </Link>
      <Link to="/Login" type="button" className="btn btn-outline-primary me-2">
        Login
      </Link>
      
      <Link to="/Signup" type="button" className="btn btn-primary me-4">
        Sign-up
      </Link>
    </div>
  </header>
</div>

    
    </>
  )
}

export default Navbar