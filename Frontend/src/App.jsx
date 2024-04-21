import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import AdminLogin from "./Components/AdminLogin";
import AdminSignup from "./Components/AdminSignup";
import {SnackbarProvider} from "notistack"
import Addproduct from "./Components/Admin/AddProduct";
<<<<<<< HEAD
=======

import Product from "./Components/Products";

>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ManageOrder from "./Components/Admin/ManageOrder";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ManageProduct from "./Components/Admin/ManageProduct";
import ManageUser from "./Components/Admin/ManageUser";
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb
import { CartProvider } from "./Context/CartContext";
=======
import Admin from "./Components/Admin/Index";


import { CartProvider } from "./Components/Context/CartContext";


>>>>>>> 8bbdaf1e0add83b6d671133d907f092829838ea5
import Product from "./Components/Products";
import { AppProvider } from "./Context/AppContext";
import ViewProduct from "./Components/viewProduct";
<<<<<<< HEAD
import Admin from "./Components/Admin/Index";
import ThankYou from "./Components/Thankyou";

=======
import UpdateProduct from "./Components/Admin/updateProduct";

import Admin from "./Components/Admin/Index";
>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider >
        <CartProvider>
<<<<<<< HEAD
=======

>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb
          <AppProvider>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Home/>}/>

        <Route path="/About" element ={<About/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
<<<<<<< HEAD
=======

        <Route path="/productList" element ={<ProductList/>}/>
        {/* <Route path="/Products" element ={<Product />}/> */}

>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb
        <Route path="/product" element ={<Product/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Checkout" element ={<Checkout/>}/>

        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/adminlogin" element ={<AdminLogin/>}/>
        <Route path="/adminsignup" element ={<AdminSignup/>}/>
        <Route path="/AddProduct" element ={<Addproduct/>}/>
        <Route path="/Checkout" element ={<Checkout />}/>
        
        
        <Route path="/ManageOrder" element ={<ManageOrder/>}/>
        <Route path="/ManageProduct" element ={<ManageProduct/>}/>
        <Route path="/ManageUser" element ={<ManageUser/>}/>
        <Route path="/viewProduct/:id" element ={<ViewProduct/>}/>
        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>

      </Routes>
      <Routes>
      <Route path="/" element ={<Home/>}/>

        <Route path="/About" element ={<About/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/product" element ={<Product/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Checkout" element ={<Checkout/>}/>

        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/adminlogin" element ={<AdminLogin/>}/>
        <Route path="/adminsignup" element ={<AdminSignup/>}/>
        <Route path="/AddProduct" element ={<Addproduct/>}/>
        <Route path="/Checkout" element ={<Checkout />}/>
        <Route path="/Thankyou" element ={<ThankYou />}/>

        
        <Route path="/ManageOrder" element ={<ManageOrder/>}/>
        <Route path="/ManageProduct" element ={<ManageProduct/>}/>
        <Route path="/ManageUser" element ={<ManageUser/>}/>
<<<<<<< HEAD
        <Route path="/viewProduct/:id" element ={<ViewProduct/>}/>
        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>
=======

        <Route path="/viewProduct/:id" element ={<ViewProduct/>}/>
        <Route path="/updateProduct/:id" element ={<UpdateProduct/>}/>
<<<<<<< HEAD

        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>

=======
        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>
>>>>>>> 8bbdaf1e0add83b6d671133d907f092829838ea5
>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb

      </Routes>
<<<<<<< HEAD
      </AppProvider>
=======

      </AppProvider>

>>>>>>> 8b498084af633775263d23fdd804fa8899d31eeb
      </CartProvider>
      </SnackbarProvider>
      </BrowserRouter>

    </div>
  )
}

export default App