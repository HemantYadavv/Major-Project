import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ResetForm = () => {


  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const [verifiedUser, setVerifiedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const checkMailExists = async () => {
    const res = await fetch(`http://localhost:3000/user/getbymail/${emailRef.current.value}`);
    // console.log(res.status);
    const data = await res.json();
    // console.log(data);
    setVerifiedUser(data);
    return res.status === 200;
  }

  const sendOTP = async () => {
    if (!await checkMailExists()) {
      enqueueSnackbar('Email not registered', { variant: 'error' });
      return;
    }
    const res = await fetch(`http://localhost:3000/util/sendotp`, {
      method: 'POST',
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    if (res.status === 201) {
      enqueueSnackbar('OTP sent successfully', { variant: 'success' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  }

  const verifyOTP = async () => {
    const res = await fetch(`http://localhost:3000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
    // console.log(res.status);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      enqueueSnackbar('Invalid OTP', { variant: 'error' });
    }
  }

  const updatePassword = async (values) => {
    const res = await fetch(`http://localhost:3000/user/update/${verifiedUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('Password updated successfully', { variant: 'success' });
      navigate("/login")
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  }

  const resetForm = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    onSubmit: updatePassword
  });


  return (
    <div>

      <div className="w-full max-w-sm mx-auto mt-10">
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h1 className='fw-bold fs-4 text-center my-3'>ResetPassword</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter Your Email"
              ref={emailRef}
            />
          </div>
          <button
            className="mb-2 w-full bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sendOTP}
          >
            Send OTP
          </button>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Enter OTP
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              ref={otpRef}
            />

          </div>
          <button
            className="mb-2 w-full bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={verifyOTP}
          >
            Verify OTP
          </button>

          {
            showForm && (
              <form action="" onSubmit={resetForm.handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    value={resetForm.values.password}
                    onChange={resetForm.handleChange}
                    type="text"
                    placeholder="Enter Your New Password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Repeat Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    value={resetForm.values.confirmPassword}
                    onChange={resetForm.handleChange}
                    type="text"
                    placeholder="Repeat Your Password"
                  />
                </div>  

                <button
                  className="mb-3 w-full bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )
          }


        </div>

      </div>


    </div>
  )
}

export default ResetForm