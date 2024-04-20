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
        
        <i className="bx bx-search" />
        <input type="text"  placeholder="Search..." />
        <span className="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" />
          <span className="links_name">Dashboard</span>
        </a>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-user" />
          <span className="links_name">User</span>
        </a>
        <span className="tooltip">User</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-chat" />
          <span className="links_name">Messages</span>
        </a>
        <span className="tooltip">Messages</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2" />
          <span className="links_name">Analytics</span>
        </a>
        <span className="tooltip">Analytics</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-folder" />
          <span className="links_name">File Manager</span>
        </a>
        <span className="tooltip">Files</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cart-alt" />
          <span className="links_name">Order</span>
        </a>
        <span className="tooltip">Order</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-heart" />
          <span className="links_name">Saved</span>
        </a>
        <span className="tooltip">Saved</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="links_name">Setting</span>
        </a>
        <span className="tooltip">Setting</span>
      </li>
      <li className="profile">
        <div className="profile-details">
          <img
            src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z"
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
  <section className="home-section">
    <div className="text">Dashboard</div>
  </section>
</>

  </>
  
  )
}

export default Sidebar