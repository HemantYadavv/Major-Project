import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AdminLogin from "./Components/AdminLogin";
import AdminSignup from "./Components/AdminSignup";
import { SnackbarProvider } from "notistack"
import Addproduct from "./Components/Admin/AddProduct";
import Product from "./Components/Products";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ManageOrder from "./Components/Admin/ManageOrder";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ManageProduct from "./Components/Admin/ManageProduct";
import ManageUser from "./Components/Admin/ManageUser";
<<<<<<< HEAD
=======
import Admin from "./Components/Admin/Index";
>>>>>>> e755a527ff445520b3c434e8f30b14c6c2e63185
import { CartProvider } from "./Context/CartContext";
import { AppProvider } from "./Context/AppContext";
import ViewProduct from "./Components/viewProduct";
import ThankYou from "./Components/Thankyou";
import UpdateProduct from "./Components/Admin/updateProduct";
<<<<<<< HEAD
import Admin from "./Components/Admin/Index";
=======

>>>>>>> e755a527ff445520b3c434e8f30b14c6c2e63185



const App = () => {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
      <SnackbarProvider >
        <CartProvider>

          <AppProvider>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Home/>}/>

        <Route path="/About" element ={<About/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>

        {/* <Route path="/productList" element ={<ProductList/>}/> */}
        {/* <Route path="/Products" element ={<Product />}/> */}

        <Route path="/product" element ={<Product/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Checkout" element ={<Checkout/>}/>

        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/adminlogin" element ={<AdminLogin/>}/>
        <Route path="/adminsignup" element ={<AdminSignup/>}/>
        <Route path="/AddProduct" element ={<Addproduct/>}/>
        
        <Route path="/ManageOrder" element ={<ManageOrder/>}/>
        <Route path="/ManageProduct" element ={<ManageProduct/>}/>
        <Route path="/ManageUser" element ={<ManageUser/>}/>

        <Route path="/viewProduct/:id" element ={<ViewProduct/>}/>
        <Route path="/updateProduct/:id" element ={<UpdateProduct/>}/>
        <Route path="/Admin" element ={<Admin/>}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
        </Route>

      
      </Routes>

      </AppProvider>

      </CartProvider>
      </SnackbarProvider>
=======
        <SnackbarProvider >
          <CartProvider>
            <AppProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product" element={<Product />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminsignup" element={<AdminSignup />} />
                <Route path="/AddProduct" element={<Addproduct />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Thankyou" element={<ThankYou />} />
                <Route path="/ManageOrder" element={<ManageOrder />} />
                <Route path="/ManageProduct" element={<ManageProduct />} />
                <Route path="/ManageUser" element={<ManageUser />} />
                <Route path="/viewProduct/:id" element={<ViewProduct />} />
                <Route path="/Admin" element={<Admin />}>
                  <Route path="AdminDashboard" element={<AdminDashboard />} />
                </Route>
                <Route path="/viewProduct/:id" element={<ViewProduct />} />
                <Route path="/updateProduct/:id" element={<UpdateProduct />} />
                <Route path="/Admin" element={<Admin />}>
                  <Route path="AdminDashboard" element={<AdminDashboard />} />
                </Route>
                <Route path="/Admin" element={<Admin />}>
                  <Route path="AdminDashboard" element={<AdminDashboard />} />
                </Route>
              </Routes>
            </AppProvider>
          </CartProvider>
        </SnackbarProvider>
>>>>>>> e755a527ff445520b3c434e8f30b14c6c2e63185
      </BrowserRouter>

    </div>
  )
}

export default App