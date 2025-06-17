import React from 'react'
import Intro from './Intro'
import Navbar from './Navbar'

const MainBody = () => {
  return (
    <div className='flex flex-col sm:flex-row  justify-center items-center px-5 pt-10 gap-6 sm:ml-14'>
        <Intro />
        <Navbar />
    </div>
  )
}

export default MainBody