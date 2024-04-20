import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import useCartContext from './Context/CartContext';

const Navbar = () => {
  const { setCartOpen } = useCartContext();
=======
// import useCartContext from '../Context/CartContext';
import useAppContext from '../Context/AppContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const { loggedIn, logout } = useAppContext();
  // const { setCartOpen } = useCartContext();
  console.log(loggedIn);

  const showLoggedin = () => {
    if (loggedIn) {
      return (<div className=" ">
        <div className="container d-flex flex-wrap justify-content-end ">

          <div className="text-end">
            <button onClick={logout} type="button" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded ">
              Logout
            </button>

          </div>
        </div>
      </div>
      );
    } else {
      return <div className=" ">
        <div className="container d-flex flex-wrap justify-content-end">

          <div className="text-end">
            <Link to={"/login"} type="button" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded btn-dark" style={{ fontFamily: "initial" }}>
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
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369
  return (
    <>


      <div className="container-fluid py-1">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between shadow  border-bottom ">
          <div className="col-md-3 mb-2 mb-md-0 px-4">
            <Link to={"/"}>
              {/* <img src="https://i.pinimg.com/originals/d6/0f/25/d60f25a4791d63bae523142d92896b20.png" alt="" style={{ height: 100, width: 200 }} /> */}
            </Link>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 fs-5 fw-semibold" style={{color:"brown",fontFamily:"serif"}}>
                Home
              </Link>
            </li>


            <li>
              <Link to="/contact" className="nav-link px-2 fs-5 fw-semibold" style={{color:"brown",fontFamily:"serif"}}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/product" className="nav-link px-2 fs-5 fw-semibold" style={{color:"brown",fontFamily:"serif"}}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-link px-2 fs-5 fw-semibold" style={{color:"brown",fontFamily:"serif"}}>
                About
              </Link>
            </li>
            <li>
            <Link to="Cart"> <button
                
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              <AiOutlineShoppingCart className='text-2xl' />

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