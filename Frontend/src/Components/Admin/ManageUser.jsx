import { useState, useEffect } from "react"



const ManageProduct = () => {
    const [Data, setData] = useState([]);


    //User fetch func
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall');

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
    const deleteFunction = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:3000/user/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchUserData();
        }
    }


    //User Display func
    const displayUsers = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.password}</td>

                
                  
                    <td>
                        <button className="btn btn-danger" onClick={() => {deleteFunction(obj._id)}}>Delete</button>
                    </td>
                   
                </tr>
            </>
        ))
    }
    return (
        <div>

            <header className="bg-danger text-white ">
                <div className="container py-3">
                    <h1 className="text-center fs-5">Manage User</h1>

                </div>
            </header>

            <div className="container mt-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
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