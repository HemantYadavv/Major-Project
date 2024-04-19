import React from 'react'
import { useState } from "react";


const ManageUser = () => {
  const [Data, setData] = useState([])

  const fetchUserData = async () => {
      const res = await fetch('http://localhost:3000/user/getall')
      console.log(res.status)
      if (res.status === 200){
          const data = await res.json();
          console.log(data)
          setData(data)
      }
  }
//   useEffect(() => {
//       fetchUserData()
//   }, [])

  const deleteProduct = async (id) => {
      console.log(id);
      const res = await fetch("http://localhost:3000/user/delete/" + id, {
          method: "DELETE",
      });
      if (res.status === 200) {
          fetchUserData();
      }
  }

  const displayUser = () =>{
      return Data.map((user) => (
          <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                  <button onClick = {() => { deleteProduct(user._id)}} className="btn btn-danger">Delete</button>
              </td>
          </tr>
      ))
  }
return (
    <>
    {/* component */}
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex">
        <h1 className="text-3xl fw-bold">Manage User</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Number</th>
              <th />
            </tr>
            <tr className="border-b hover:bg-orange-100 bg-gray-100">
              <td className="p-3 px-5">
                <input
                  type="text"
                  defaultValue="user.name"
                  className="bg-transparent border-b-2 border-gray-300 py-2"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  defaultValue="user.email"
                  className="bg-transparent border-b-2 border-gray-300 py-2"
                />
              </td>
              <td className="p-3 px-5">
              <td className="p-3 px-5">
                <input
                  type="number"
                  defaultValue="user.number"
                  className="bg-transparent border-b-2 border-gray-300 py-2"
                />
              </td>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
  
)
}



export default ManageUser