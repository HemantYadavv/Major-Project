import React from 'react'
import { Link } from 'react-router-dom'
import useCartContext from '../Context/CartContext';
import useAppContext from '../Context/AppContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
  const { loggedIn, logout } = useAppContext();
  const { getCartItemsCount } = useCartContext();
  console.log(loggedIn);

  const showLoggedin = () => {
    if (loggedIn) {
      return (<div className=" ">
        <div className="container mt-1 d-flex flex-wrap justify-content-end ">

          <div className="text-end">
            <div className="dropdown">
              <button
                className="btn btn-warning fw-semibold dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item px-2 pt-px fs-6 fw-semibold" to="user/profile" style={{ fontFamily: "serif", }}>
                    <ion-icon name="person"></ion-icon>
                    <span className='px-2'> My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item px-2 pt-px fs-6 fw-semibold" to="Orders" style={{ fontFamily: "serif", }}>
                    <ion-icon name="cube"></ion-icon>
                    <span className='px-2'>My Orders</span>
                  </Link>
                </li>
                <li>
                  <button>
                    <a className="dropdown-item px-2 pt-px fs-6 fw-semibold" type='button' onClick={logout} style={{ fontFamily: "serif", }}>
                      <ion-icon name="log-out"></ion-icon>
                      <span className='px-2'>Logout</span>
                    </a>
                  </button>
                </li>
              </ul>
            </div>
            {/* <button onClick={logout} type="button" className="bg-red-600 hover:bg-red-700 text-white px-3 mt-2 py-1 rounded ">
              Logout
            </button> */}
          </div>
        </div>
      </div>
      );
    } else {
      return <div className=" ">
        <div className="container d-flex flex-wrap justify-content-end">

          <div className="text-end">
            <Link to={"/login"} type="button" className="bg-red-600 hover:bg-red-700 text-white mt-2 px-3 py-1 rounded btn-dark" style={{ fontFamily: "initial" }}>
              Login
            </Link>
            <Link to={"/signup"} type="button" className="bg-blue-600 mx-2 hover:bg-blue-700 text-white px-3 py-1 rounded " style={{ fontFamily: "initial" }}>
              SignUp
            </Link>
          </div>
        </div>
      </div>
    }
  }
  
  return (
    <>
      <div className="container-fluid py-1">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between shadow  border-bottom ">
          <div className="col-md-3 mb-2 mb-md-0 px-4">
            <Link to={"/"}>
              <img src="https://i.pinimg.com/originals/d6/0f/25/d60f25a4791d63bae523142d92896b20.png" alt="" style={{ height: 80, width: 140 }} />
            </Link>
            
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 fs-5 fw-semibold" style={{ color: "brown", fontFamily: "serif" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link px-2 fs-5 fw-semibold" style={{ color: "brown", fontFamily: "serif" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/product" className="nav-link px-2 fs-5 fw-semibold" style={{ color: "brown", fontFamily: "serif" }}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-link px-2 fs-5 fw-semibold" style={{ color: "brown", fontFamily: "serif" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="Cart"> <button

                className="block py-2 mt-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

              >
                <p className='d-flex'>
                  <span> <AiOutlineShoppingCart className='text-2xl' /></span>
                  <span className='badge badge-notification bg-danger rounded text-white' style={{ fontSize: "12px" }}>{getCartItemsCount()}</span></p>
              </button></Link>
            </li>
            <li>
              {showLoggedin()}
            </li>
          </ul>

        </header>
      </div>


    </>
  )
}

export default Navbar