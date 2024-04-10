import React from 'react'

const AdminLogin = () => {
  return (
    <div className="container d-flex justify-content-center text-black   ">
    {/* <div className="px-1 ms-xl-4">
      <i
        className="fas fa-solid fa-user fa-4x me-3 pt-5 mt-xl-4"
        style={{ color: "#709085" }}
      />
      
    </div> */}
    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-xl-0">
      <form style={{ width: "23rem" }}>
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
            Email address
          </label>
         
          <input
            type="email"
            id="form2Example18"
            className="plc form-control form-control-lg"
          />
        </div>
        <div className=" mb-4">
          <label className=" text-dark form-label" htmlFor="form2Example28">
            Password
          </label>
          <input
            type="password"
            id="form2Example28"
            className="plc form-control form-control-lg"
          />
        </div>
        <div className="pt-1 mb-4">
          <button className="btn btn-info btn-lg btn-block" type="button">
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
          <a href="#!" className="link-info">
            Register here
          </a>
        </p>
      </form>
    </div>
  </div>
  )
}

export default AdminLogin