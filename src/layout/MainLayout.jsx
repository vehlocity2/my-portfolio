import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='bg-[#313743] h-screen '>
       <Outlet />
    </div>
  )
}

export default MainLayout