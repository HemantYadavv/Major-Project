import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {

  return (
    <>
   
   <>
  <div className="sidebar">
    <div className="logo-details">
      <i className="bx bxl-c-plus-plus icon" />
      <div className="logo_name">Mitti Mahal</div>
      <i className=" bx bx-menu" id="btn"  />
    </div>
    <ul className="nav-list">
        <li>
        <Link to="/Admin/AdminDashboard">
          <i className="bx bx-grid-alt" />
          <span className="links_name">Admin Dashboard</span>
        </Link>
        <span className="tooltip">Admin Dashboard</span>
      </li>
      <li>
        <Link to="/Admin/ManageUser">
          <i className="bx bx-user" />
          <span className="links_name">Manage User</span>
        </Link>
        <span className="tooltip">Manage User</span>
      </li>
      <li>
        <Link to="/Admin/AddProduct">
          <i className="bx bxs-cart-add" />
          <span className="links_name">Add Product</span>
        </Link>
        <span className="tooltip">Add Product</span>
      </li>
      <li>
        <Link to="/Admin/ManageProduct">
<<<<<<< HEAD
          <i className="bx bx-pie-chart-alt-2" />
=======
          <i className="bx bx-pie-chart-alt-2" /> 
>>>>>>> 0871014a0b70a0d10db1bad19cafd91c23e65c1e
          <span className="links_name">Manage Product</span>
        </Link>
        <span className="tooltip">Manage Product</span>
      </li>

      <li>
        <Link to="/Admin/ManageOrder">
          <i className="bx bx-cart-alt" />
          <span className="links_name">Manage Order</span>
        </Link>
        <span className="tooltip">Manage Order</span>
      </li>
<<<<<<< HEAD
=======
   
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="links_name">Setting</span>
        </a>
        <span className="tooltip">Setting</span>
      </li>
>>>>>>> dfc9ef2c40b9855d6f01e98943385726f8b5b56e
      <li className="profile">
        <div className="profile-details">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="profileImg"
          />
          <div className="name_job">
            <div className="name">Stella Army</div>
            <div className="job">Web designer</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out" />
      </li>
    </ul>
  </div>
  {/* <section className="home-section">
    <div className="text">Hello</div>
  </section> */}
</>

  </>
  
  )
}

export default Sidebar