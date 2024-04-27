import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


const ManageProduct = () => {
    const [Data, setData] = useState([]);


    //User fetch func
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/product/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    //Delete func
    const deleteFuction = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:3000/product/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchUserData();
        }
    }


    //User Display func
    const displayUsers = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.pname}</td>
                    <td>{obj.pcategory}</td>
                    <td>{obj.pprice}</td>


                    <td>{obj.pdetail}</td>
                
                  
                    <td>
                        <button className="btn btn-danger" onClick={() => {deleteFuction(obj._id)}}>Delete</button>
                    </td>
                    <td>
                    <Link className="btn btn-success text-white hover:bg-green-700 mx-3" to={`/updateProduct/${obj._id}`} >Update</Link>
                    </td>
                </tr>
            </>
        ))
    }

    return (
        <div>

            <header className="bg-danger text-white ">
                <div className="container py-3">
                    <h1 className="text-center fs-5">Manage Product</h1>

                </div>
            </header>

            <div className="container mt-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Detail</th>
                            <th></th>
                            <th></th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageProduct