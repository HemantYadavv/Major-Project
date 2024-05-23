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
// import Checkout from "./Components/Checkout/Checkout";
import ManageProduct from "./Components/Admin/ManageProduct";
import ManageUser from "./Components/Admin/ManageUser";
import Admin from "./Components/Admin/Index";
import { CartProvider } from "./Context/CartContext";
import ViewProduct from "./Components/viewProduct";
// import ThankYou from "./Components/Thankyou";
import UpdateProduct from "./Components/Admin/updateProduct";
import ProductList from "./Components/ProductList";
import Showpiece from "./Components/Showpiece";
import Decoration from "./Components/Decoration";
import WaterBottle from "./Components/WaterBottle";
import Utensil from "./Components/Utensil";
import Checkout from "./Components/Checkout/Checkout";
import { AppProvider } from "./Context/AppContext";
import OrderHistory from "./Components/Orders";
import ThankYou from "./Components/Thankyou";
import Feedback from "./Components/Feedback";
import User from "./Components/User/Index";
import Profile from "./Components/User/profile";
import Edit from "./Components/User/Edit";
import ResetForm from "./Components/resetForm";
// import User from "./Components/User/Index";
// import Profile from "./Components/User/profile";
// import Edit from "./Components/User/Edit";

// import Showpiece from "./Components/Showpieces";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SnackbarProvider >
          <CartProvider>

            <AppProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />

<<<<<<< HEAD
        <Route path="/About" element ={<About/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
      
        <Route path="/productList" element ={<ProductList/>}/>
        <Route path="/Showpiece" element ={<Showpiece/>}/>
        <Route path="/Decoration" element ={<Decoration/>}/>
        <Route path="/WaterBottle" element ={<WaterBottle/>}/>
        <Route path="/Utensil" element ={<Utensil/>}/>
        <Route path="/thankyou" element ={<ThankYou/>}/>
        {/* <Route path="/productList" element ={<ProductList/>}/> */}
        {/* <Route path="/Products" element ={<Product />}/> */}
        <Route path="/product" element ={<Product/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Feedback" element ={<Feedback/>}/>
        <Route path="/Resetform" element ={<ResetForm/>}/>
       


        <Route path="/Checkout" element ={<Checkout/>}/>
        <Route path="/Order" element ={<OrderHistory/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/adminlogin" element ={<AdminLogin/>}/>
        <Route path="/adminsignup" element ={<AdminSignup/>}/>
        <Route path="/viewProduct/:id" element ={<ViewProduct/>}/>
        <Route path="/updateProduct/:id" element ={<UpdateProduct/>}/>

        <Route path="/Admin" element ={<Admin />}>
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
          <Route path="ManageUser" element ={<ManageUser/>}/>
        <Route path="AddProduct" element ={<Addproduct/>}/>
        <Route path="ManageOrder" element ={<ManageOrder/>}/>
        <Route path="ManageProduct" element ={<ManageProduct/>}/>
        </Route>

        <Route path="user" element={<User/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="Edit" element={<Edit />}/>
           
        </Route>
      </Routes>
      </AppProvider>
</CartProvider>
      </SnackbarProvider>
      </BrowserRouter>

    </div>
=======

                <Route path="/About" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/productList" element={<ProductList />} />
                <Route path="/Showpiece" element={<Showpiece />} />
                <Route path="/Decoration" element={<Decoration />} />
                <Route path="/WaterBottle" element={<WaterBottle />} />
                <Route path="/Utensil" element={<Utensil />} />
                <Route path="/thankyou" element={<ThankYou />} />
                {/* <Route path="/productList" element ={<ProductList/>}/> */}
                {/* <Route path="/Products" element ={<Product />}/> */}
                <Route path="/product" element={<Product />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Order" element={<OrderHistory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminsignup" element={<AdminSignup />} />
                <Route path="/viewProduct/:id" element={<ViewProduct />} />
                <Route path="/updateProduct/:id" element={<UpdateProduct />} />
                <Route path="/Admin" element={<Admin />}>
                  <Route path="AdminDashboard" element={<AdminDashboard />} />
                  <Route path="ManageUser" element={<ManageUser />} />
                  <Route path="AddProduct" element={<Addproduct />} />
                  <Route path="ManageOrder" element={<ManageOrder />} />
                  <Route path="ManageProduct" element={<ManageProduct />} />
                </Route>

                <Route path="/User" element={<User />}>
                <Route path="profile" element={<Profile />} />
                <Route path="edit" element={<Edit />} />

                </Route>
                

              </Routes>
            </AppProvider>
          </CartProvider>
        </SnackbarProvider>
</BrowserRouter>
</div>
>>>>>>> b224631cce943f7c716ab1d22af42375432bd769
  )
}

export default App