import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Product from "./Components/Product";
import AdminLogin from "./Components/AdminLogin";
import AdminSignup from "./Components/AdminSignup";
import {SnackbarProvider} from "notistack"
import Addproduct from "./Components/Admin/AddProduct";
<<<<<<< HEAD
import ProductList from "./Components/ProductLis";
import Product from "./Components/Products";
=======
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ManageOrder from "./Components/Admin/ManageOrder";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import ManageProduct from "./Components/Admin/ManageProduct";
import ManageUser from "./Components/Admin/ManageUser";
<<<<<<< HEAD
import Admin from "./Components/Admin/Index";
=======
>>>>>>> 02979180e9e4d96043dee17cb7579a6b47f93342
>>>>>>> 385c47971e18121b4df2e54ec5eec0e92ed7eebd


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider >
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Home/>}/>

        <Route path="/About" element ={<About/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
<<<<<<< HEAD
        <Route path="/productList" element ={<ProductList/>}/>
        {/* <Route path="/Products" element ={<Product />}/> */}
=======
        <Route path="/product" element ={<Product/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Checkout" element ={<Checkout/>}/>


>>>>>>> 02979180e9e4d96043dee17cb7579a6b47f93342
       
       
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/adminlogin" element ={<AdminLogin/>}/>
        <Route path="/adminsignup" element ={<AdminSignup/>}/>
        <Route path="/AddProduct" element ={<Addproduct/>}/>
        
        <Route path="/ManageOrder" element ={<ManageOrder/>}/>
        <Route path="/ManageProduct" element ={<ManageProduct/>}/>
        <Route path="/ManageUser" element ={<ManageUser/>}/>
        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>

      
      </Routes>
      </SnackbarProvider>
      </BrowserRouter>

    </div>
  )
}

export default App