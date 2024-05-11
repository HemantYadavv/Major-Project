import React from 'react'
import './Login.css';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate()

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: ""
    },


    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:3000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
        toast('Contact form submitted successfully')
        navigate('/Login');
      } else {
        toast("Something went wrong")
      }
    },

   
  })
  return (
    <>
    
   
  <div className="container-fluid vh-80 w-75">
    <div className="row">
      <div className="col-md-6 text-black   ">
        {/* <div className="px-1 ms-xl-4">
          <i
            className="fas fa-solid fa-user fa-4x me-3 pt-5 mt-xl-4"
            style={{ color: "#709085" }}
          />
          
        </div> */}
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-xl-0">
          <form style={{ width: "23rem" }} onSubmit={signupForm.handleSubmit}>
            <div className='d-flex justify-content-center'>
          <i
            className="fas fa-solid fa-user fa-4x me-3 mb-5 pt-5 mt-xl-4"
            style={{ color:"black" }}
          />
          </div>
            {/* <h3 className="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: 1 }}>
              Log in
            </h3> */}
            <div className=" mb-4">
               <label className="text-dark form-label" htmlFor="form2Example18">
                Full Name
              </label>
             
              <input
                type="text"
                id="name"
                value={signupForm.values.name}
                onChange={signupForm.handleChange}
                className="plc form-control form-control-lg"
              />
            </div>
            <div className=" mb-4">
              <label className=" text-dark form-label" htmlFor="form2Example28">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={signupForm.values.email}
                onChange={signupForm.handleChange}
                className="plc form-control form-control-lg"
              />
            </div>
            <div className=" mb-4">
              <label className=" text-dark form-label" htmlFor="form2Example28">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={signupForm.values.password}
                onChange={signupForm.handleChange}
                className="plc form-control form-control-lg"
              />
            </div>
            <div className=" mb-4">
              <label className=" text-dark form-label" htmlFor="form2Example28">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                value={signupForm.values.cpassword}
                onChange={signupForm.handleChange}
                className="plc form-control form-control-lg"
              />
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">
                Signup
              </button>
            </div>
            <div className='mb-4'>
            <p>
              Already have an account?{" "}
              <Link to="/Login" className="link-info">
                Login
              </Link>
            </p>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 mt-5 px-0 d-none d-sm-block">
        <img
          src="https://media.istockphoto.com/id/1566668756/vector/sneer-in-hindi-it-is-called-thathera.jpg?s=612x612&w=0&k=20&c=UDSYwGutvDKBKBPO5WFswk2S7XloeNcsPpi7kDt9FHk="
          alt="Login image"
          className="mt-5 w-100 vh-90"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
    </div>
  </div>


    </>
  )
}

export default Signup