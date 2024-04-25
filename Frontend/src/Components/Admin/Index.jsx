import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
   
      <Sidebar />
<<<<<<< HEAD
    </div>
    <Outlet />
=======
   
     <div style={{marginLeft:"100px"}}>
    <Outlet />   </div>                  
>>>>>>> 0871014a0b70a0d10db1bad19cafd91c23e65c1e
    </>
  )
}

export default Admin