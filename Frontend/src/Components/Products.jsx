import useCartContext from './Context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5';

const Product = () => {


  const { addItemToCart, isInCart } = useCartContext();

  const [productList, setproductList] = useState([]);
    const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/product/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setproductList(data);
        setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterproduct = (e) => {
    const value = e.target.value;
    setproductList(masterList.filter((product) => {
      return (product.pcategory.toLowerCase().includes(value.toLowerCase())),
        (product.pname.toLowerCase().includes(value.toLowerCase()))
    }))
  }

  const displayproductData = () => {
    if (productList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return productList.map((product) => (
      <>


        <div className=" m-2 shadow-lg">
          {/* <Link href={/ViewProduct/${product._id}}> <img src={'http://localhost:5000/' + product.image} alt="" className="w-auto mx-auto h-auto  py-1 " style={{ objectFit: "cover", height: 200 }} />
          </Link> */}
          <h2 className=' fw-semibold fs-5 mt-3 mb-3 text-center'>{product.pname}</h2>
          <p className='text-red-700 text-center'>₹{product.pprice}</p>

          <p className='text-black text-center mb-3' >{product.pcategory}</p>

          <button disabled={isInCart(product)} onClick={e => addItemToCart(product)} className='mt-2 mb-2 bg-green-600 hover:bg-green-700 py-1 px-3 text-white mx-auto  block rounded' >
            {isInCart(product) ? 'Already Added' : 'Add to Cart'}
          </button>

          {/* <Link href={/ViewProduct/${product._id}}><button className="bg-black hover:bg-black mx-auto block py-1 px-3 text-white mb-3 rounded" style={{ fontFamily: "serif" }} >View More</button></Link> */}
       </div>
       


      </>
    ))
  }

  return (
<>
    <div>
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoSearch />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required=""
            onChange={filterproduct}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="container-fluid ">
        <div className="grid grid-cols-4 ">

          {displayproductData()}
        </div>
      </div>

    </div>
    </>
  )
}

export default Product