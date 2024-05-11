import React from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import useAppContext from '../Context/AppContext';

const Login = () => {

  const { setLoggedIn, setCurrentUser } = useAppContext();
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",

    },


    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:3000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
        toast("Login Successfull")

        setLoggedIn(true);

        const data = await res.json();
        setCurrentUser(data)
        sessionStorage.setItem('isloggedin', true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data))
          navigate('/Admin/AdminDashboard');
        } else {
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/")
        }
      } else if (res.status === 400){
        toast("Invalid Credentials")
      }




    }
  })
  return (

    <div className="container-fluid vh-80 w-75">
      <div className="row">
        <div className="col-md-6 text-black   ">

          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-xl-0">
            <form style={{ width: "23rem" }} onSubmit={loginForm.handleSubmit}>
              <div className='d-flex justify-content-center'>
                <i
                  className="fas fa-solid fa-user fa-4x me-3 mb-5 pt-5 mt-xl-4"
                  style={{ color: "black" }}
                />
              </div>

              <div className=" mb-4">
                <label className="text-dark form-label" htmlFor="form2Example18">
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
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
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  className="plc form-control form-control-lg"
                />
              </div>
              <div className="pt-1 mb-4">
                <button className="btn btn-info btn-lg btn-block" type="submit">
                  Login
                </button>
              </div>
              <p className="small mb-5 pb-lg-2">
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </p>
              <p>
                Don't have an account?{" "}
                <Link to="/Signup" className="link-info">
                  Signup here
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="col-md-6 px-0 d-none d-sm-block">
          <img
            src="https://media.istockphoto.com/id/1361114024/vector/potter-girl-a-woman-sculpts-a-clay-vase-behind-a-potters-wheel.jpg?s=612x612&w=0&k=20&c=g3nnQN5oRPFu0lZfzY3fhTjs_cXe38uTfSzmhOluUbk="
            alt="Login image"
            className=" mt-5 w-100 vh-50"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </div>
      </div>
    </div>



  )
}
export default Login