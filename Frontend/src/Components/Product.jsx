import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'

const Product = () => {

  const [product, setProduct] = useState([]);

  //   const { category } = useParams();

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:3000/product/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data)
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const displayproductData = () => {
    if (product.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return product.map((product) => (

      <div>
        <div className='col-md-3 mt-4 '>
          <div className=" card bg-black shadow-lg bg-opacity-25 " style={{ border: "none" }}>
            <div className="card-header bg-dark m-2 shadow  bg-opacity-25">
              <Link to=""> <img src={'http://localhost:3000/' + product.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
              </Link>
            </div>
            <div className="card-footer" style={{ border: "none", height: "170px" }}>
              <h2 className=' fw-semibold fs-5 mt-3 mb-3 text-center' style={{ fontFamily: "serif" }}>{product.pname}</h2>
              <p className='text-red-700 text-center' style={{ fontFamily: "cursive" }}>{product.pprice}</p>

              <p className='text-black text-center mb-3' style={{ fontFamily: "cursive" }}>{product.pcategory}</p>

              <button className='mt-2 mb-2 btn btn-danger' >Add TO Cart</button>

              <Link to=""><button className="btn btn-dark block m-auto" style={{ fontFamily: "serif" }} >View More</button> </Link>
            </div>
          </div>
        </div>
      </div>

    ))
  }

  return (
    <>
      <div className='pt-20 bg-slate-100'>

        <form className="input-group mb-4 w-75 mx-auto">
          <input type="search" role="search" className="form-control bg-dark bg-opacity-25" style={{ fontFamily: "cursive" }} placeholder='Search' />
          {/* <button className="btn btn-danger fs-5 fw-semibold" style={{ fontFamily: "serif" }}><IoSearch /></button> */}
        </form>

        <div className="container">
          
              

          
                <div className="row">
                  {displayproductData()}
                </div>
        </div>


      </div>
    </>
  )
}

export default Product