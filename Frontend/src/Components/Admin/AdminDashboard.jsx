import React from 'react'

const AdminDashboard = () => {
  return (
    <>
    <h1 className='mt-3 ml-4 fw-bold text-2xl'>
      Admin Dashboard
    </h1>
    <div className=' h-screen flex items-center justify-center '>
        <iframe style={{background: "#FFFFFF",border: "none", borderRadius:"2px",boxShadow:" 0 2px 10px 0 rgba(70, 76, 79, .2)", width:"60vw", height:"70vh" }} src="https://charts.mongodb.com/charts-project-0-suiaiko/embed/charts?id=663f58f4-84d8-4bb0-81b4-84eb24d5c2e9&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
    </div>
    </>
  )
}

export default AdminDashboard