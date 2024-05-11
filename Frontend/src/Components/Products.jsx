import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5';
import useCartContext from '../Context/CartContext';

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
                <div className="col-md-3 p-2 shadow-lg">
                    <Link href={`/ViewProduct/${product._id}`}> <img src={'http://localhost:3000/' + product.image} alt="" className="w-100  py-1 " style={{ objectFit: "cover", height: 200 }} />
                    </Link>
                    <h2 className=' fw-semibold fs-5 mt-3 mb-3 text-center'>{product.pname}</h2>
                    <p className='text-red-700 text-center'>₹{product.pprice}</p>
                    <p className='text-black text-center mb-3' >{product.pcategory}</p>
                    <button disabled={isInCart(product)} onClick={e => addItemToCart(product)} className='mt-2 mb-2 bg-success  py-1 px-3 text-white mx-auto  block rounded' >
                        {isInCart(product) ? 'Already Added' : 'Add to Cart'}
                    </button>

                    <Link to={`/viewProduct/${product._id}`}><button className="bg-black hover:bg-black mx-auto block py-1 px-3 text-white mb-3 rounded" style={{ fontFamily: "serif" }} >View More</button></Link>
                </div>
            </>
        ))
    }

    return (
        <>
            <div>
                <form>
                    <div class="input-group mb-5 my-3 bg-dark w-75 mx-auto bg-opacity-25 rounded">
                        <input type="search" required=""
                            onChange={filterproduct} className="form-control " placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="px-4 fs-5" id="basic-addon2"><IoSearch /></button>
                    </div>
                </form>

                <div className="container-fluid ">
                    <div className="row ">
                        {displayproductData()}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product