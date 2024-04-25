import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <div className=''>
      <Sidebar />
    </div>
    <Outlet />
    </>
  )
}

export default Admin