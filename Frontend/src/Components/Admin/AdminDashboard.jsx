import React from 'react'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div>
    <div className="container ">
      <div className="row">
        <div className="col-md-2">
        <div className="navigation">
        <ul>
          <li>
            <Link to="/Home">
              <h1 className="title" >Mitti Mahal</h1>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="title">Home</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <ion-icon name="bar-chart-outline" />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="document-text-outline" />
              </span>
              <span className="title">Inventory</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="cart-sharp" />
              </span>
              <span className="title">Add Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline" />
              </span>
              <span className="title">Manage Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-sharp" />
              </span>
              <span className="title">Manage User</span>
            </a>
          </li>
          <li>
            <Link to="/ManageOrder">
              <span className="icon">
                <ion-icon name="lock-closed-outline" />
              </span>
              <span className="title">Manage Order</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="title">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>
     
      {/* ========================= Main ==================== */}
      <div className="main">
        {/* <div className="topbar">
      <div className="toggle">
        <ion-icon name="menu-outline" />
      </div>
      <div className="search">
        <label>
          <ion-icon name="search-outline" />
          <input type="text" placeholder="Search here" />
          
        </label>
      </div>
    </div> */}
        {/* ======================= Cards ================== */}
        {/* <div className="cardBox">
      <div className="card">
        <div>
          <div className="numbers">1,504</div>
          <div className="cardName">Daily Views</div>
        </div>
        <div className="iconBx">
          <ion-icon name="eye-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">80</div>
          <div className="cardName">Sales</div>
        </div>
        <div className="iconBx">
          <ion-icon name="cart-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">284</div>
          <div className="cardName">Comments</div>
        </div>
        <div className="iconBx">
          <ion-icon name="chatbubbles-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">$7,842</div>
          <div className="cardName">Earning</div>
        </div>
        <div className="iconBx">
          <ion-icon name="cash-outline" />
        </div>
      </div>
    </div> */}
        {/* ================ Order Details List ================= */}

      </div>
    </div>
    </div>

  )
}

export default AdminDashboard