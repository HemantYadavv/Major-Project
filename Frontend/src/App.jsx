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
import ProductList from "./Components/ProductLis";
import Product from "./Components/Products";
=======
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ManageOrder from "./Components/Admin/ManageOrder";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import ManageProduct from "./Components/Admin/ManageProduct";
import ManageUser from "./Components/Admin/ManageUser";
<<<<<<< HEAD
import { CartProvider } from "./Components/Context/CartContext";
=======
<<<<<<< HEAD
import { CartProvider } from "./Context/CartContext";
import Product from "./Components/Products";
import { AppProvider } from "./Context/AppContext";
import ViewProduct from "./Components/viewProduct";
import UpdateProduct from "./Components/Admin/updateProduct";
=======
<<<<<<< HEAD
import Admin from "./Components/Admin/Index";
=======
>>>>>>> 02979180e9e4d96043dee17cb7579a6b47f93342
>>>>>>> 385c47971e18121b4df2e54ec5eec0e92ed7eebd
>>>>>>> 4c9eae5931c262498f45927bc91db295d687dd37
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider >
        <CartProvider>
<<<<<<< HEAD
=======
          <AppProvider>
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369
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
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369
        <Route path="/product" element ={<Product/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Checkout" element ={<Checkout/>}/>

<<<<<<< HEAD
       
       
=======
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/adminlogin" element ={<AdminLogin/>}/>
        <Route path="/adminsignup" element ={<AdminSignup/>}/>
        <Route path="/AddProduct" element ={<Addproduct/>}/>
        
        <Route path="/ManageOrder" element ={<ManageOrder/>}/>
        <Route path="/ManageProduct" element ={<ManageProduct/>}/>
        <Route path="/ManageUser" element ={<ManageUser/>}/>
<<<<<<< HEAD
        <Route path="/viewProduct/:id" element ={<ViewProduct/>}/>
        <Route path="/updateProduct/:id" element ={<UpdateProduct/>}/>


=======
        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>
>>>>>>> 4c9eae5931c262498f45927bc91db295d687dd37

      
      </Routes>
<<<<<<< HEAD
=======
      </AppProvider>
>>>>>>> 7ed11547b1d76c59922c4cd9719ac0e782d1c369
      </CartProvider>
      </SnackbarProvider>
      </BrowserRouter>

    </div>
  )
}

export default App